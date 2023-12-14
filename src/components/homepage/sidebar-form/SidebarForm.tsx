import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import debounce from 'debounce';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import AccessControl from '@/components/homepage/sidebar-form/form-sections/AccessControl';
import Features from '@/components/homepage/sidebar-form/form-sections/Features';
import License from '@/components/homepage/sidebar-form/form-sections/License';
import Metadata from '@/components/homepage/sidebar-form/form-sections/Metadata';
import NotAvailable from '@/components/homepage/sidebar-form/form-sections/NotAvailable';
import Standard from '@/components/homepage/sidebar-form/form-sections/Standard';
import { STANDARDS } from '@/components/homepage/sidebar-form/formConstants';
import useSidebarFormSubmit from '@/components/homepage/sidebar-form/useSidebarFormSubmit';
import { env } from '@/env/env.mjs';
import { dictionary } from '@/libs/en';

export type SidebarFormSchema = z.infer<typeof schema>;

const schema = z.object({
  standard: z.enum([STANDARDS.PSP22, STANDARDS.PSP37, STANDARDS.PSP34]),
  name: z.string(),
  symbol: z.string(),
  decimals: z
    .number()
    .min(0, { message: dictionary.sidebarForm.sections.metadata.decimals.validation.decimalNumberTooLow })
    .max(18, { message: dictionary.sidebarForm.sections.metadata.decimals.validation.decimalNumberTooHigh }),
  mintable: z.boolean(),
  burnable: z.boolean(),
  pausable: z.boolean(),
  capped: z.boolean(),
  accessControl: z.union([z.literal('security/ownable'), z.literal('security/control'), z.string().optional()]),
  license: z.string()
});

const defaultValues: SidebarFormSchema = {
  standard: STANDARDS.PSP22,
  name: '',
  symbol: '',
  decimals: 0,
  mintable: false,
  burnable: false,
  pausable: false,
  capped: false,
  accessControl: '',
  license: ''
};

export default function SidebarForm() {
  const methods = useForm<SidebarFormSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues
  });

  const onSubmit = useSidebarFormSubmit();
  const { handleSubmit, watch } = methods;
  const watchedValues = watch();
  const onSubmitHandler = handleSubmit(onSubmit);
  const debouncedSubmit = debounce(onSubmitHandler, env.NEXT_PUBLIC_DEBOUNCE_INTERVAL_IN_MS);

  // initial data fetch form
  useEffect(() => {
    onSubmit(watchedValues).catch((err) => {
      console.error(err);
    });
  }, []);

  // subscribe to handle fetch after every onChange
  useEffect(() => {
    const subscription = watch(() => {
      debouncedSubmit()?.catch(console.error);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="text-slate-200">
      <FormProvider {...methods}>
        <h2 className="pb-6">{dictionary.sidebarForm.selectStandard}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Standard />
          <h2 className="py-6">{dictionary.sidebarForm.configure}</h2>
          {watchedValues.standard === STANDARDS.PSP22 ? (
            <>
              <Metadata />
              <Features />
              <AccessControl />
              <License />
            </>
          ) : (
            <NotAvailable />
          )}
        </form>
      </FormProvider>
    </div>
  );
}
