import { Contract, Metadata, start } from 'ink-generator';
import { FEATURES_OPTIONS } from '@/components/homepage/sidebar-form/formConstants';
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

  return async (data: SidebarFormSchema) => {
    const { name, symbol, decimals, license, standard, accessControl, isSingleCodeGenerationModeActive } = data;
    const featureExtensions = FEATURES_OPTIONS[standard]
      .filter(({ name }) => data[name as keyof typeof data])
      .map(({ name }) => name);

    const accessControlExtension = accessControl && accessControl !== '' ? [accessControl] : [];
    const extensions = [...featureExtensions, ...accessControlExtension];
    if (Boolean(name || symbol || Number.isFinite(decimals))) {
      extensions.push('metadata');
    }

    try {
      if (!URL) throw new Error('API base URL is not defined.');
      const result = await (async (): Promise<FetchDataResponse> => {
        const metadata = new Metadata(name, symbol, undefined, decimals ?? 0);
        const contract = new Contract(standard, metadata, extensions, URL, license, isSingleCodeGenerationModeActive);
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
}
