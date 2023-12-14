import { useId } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessageForm } from '@/components/data-entry/ErrorMessageForm';
import { dictionary } from '@/libs/en';

interface CheckboxChipProps {
  label: string;
  name: string;
}

export function CheckboxChip({ label, name }: CheckboxChipProps) {
  const { register } = useFormContext();

  const {
    fieldState: { error }
  } = useController({ name });
  const id = useId();

  return (
    <div>
      <input type="checkbox" id={id} {...register(name)} className="peer hidden" />
      <label
        htmlFor={id}
        className="bg-transparent inline-flex cursor-pointer items-center justify-between rounded-full border border-teal-500 p-1.5 text-teal-500 hover:bg-teal-900 hover:text-teal-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 peer-checked:text-teal-950 peer-checked:hover:bg-teal-600 peer-checked:hover:text-teal-950"
      >
        <div className="block">
          <div className="text-sm font-semibold">{label}</div>
        </div>
      </label>
      {error && (
        <ErrorMessageForm errorMessage={error.message ? error.message : dictionary.validation.defaultErrorMsg} />
      )}
    </div>
  );
}
