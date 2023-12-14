import { Contract, Metadata, start } from 'ink-generator';
import { FEATURES_OPTIONS, STANDARDS } from '@/components/homepage/sidebar-form/formConstants';
import type { SidebarFormSchema } from '@/components/homepage/sidebar-form/SidebarForm';
import { sortWasmResults } from '@/components/homepage/sidebar-form/sortWasmResults';
import { useWasmData } from '@/contexts/WasmDataContext';
import type { WasmDataResponse } from '@/contexts/WasmDataContext';
import { env } from '@/env/env.mjs';
import { dictionary } from '@/libs/en';

const URL = env.NEXT_PUBLIC_CODE_API_BASE_URL;

interface FetchDataResponse {
  files: WasmDataResponse[];
  message?: string;
}

export default function useSidebarFormSubmit() {
  const { setWasmFileData, setWasmCodeFetchingError } = useWasmData();

  // This is a workaround for the fact that the Rust code doesn't support PSP34 yet.
  function filterExtentions(extensions: string[], standard: string): string[] {
    if (standard === STANDARDS.PSP34) {
      return [];
    }
    return extensions;
  }

  const onSubmit = async (data: SidebarFormSchema) => {
    const { name, symbol, decimals, license, standard, accessControl } = data;
    const featureExtensions = FEATURES_OPTIONS.filter(({ value }) => data[value as keyof typeof data]).map(
      ({ value }) => value
    );

    const shouldIncludeMetadata = Boolean(name || symbol || Number.isFinite(decimals)) ? 'metadata' : '';
    const accessControlExtension = accessControl && accessControl !== '' ? [accessControl] : [];
    const extensions = [...featureExtensions, ...accessControlExtension, shouldIncludeMetadata && 'metadata'];

    try {
      if (!URL) throw new Error('API base URL is not defined.');
      const result = await (async (): Promise<FetchDataResponse> => {
        const metadata = new Metadata(name, symbol, undefined, decimals);
        const contract = new Contract(standard, metadata, filterExtentions(extensions, standard), URL, license);
        return await start(contract);
      })();

      if (result.files.length > 0) {
        const sortedResults = sortWasmResults(result.files);
        setWasmCodeFetchingError('');
        setWasmFileData(sortedResults);
      } else {
        setWasmCodeFetchingError(result.message ? result.message : dictionary.errors.useSidebarFormSubmit);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return onSubmit;
}
