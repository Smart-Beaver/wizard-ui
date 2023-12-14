import { useId } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessageForm } from '@/components/data-entry/ErrorMessageForm';
import { dictionary } from '@/libs/en';

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  inputType?: 'text' | 'number';
  disabled?: boolean;
}

export function Input({ label, name, placeholder, inputType = 'text', disabled }: InputProps) {
  const { register } = useFormContext();

  const {
    fieldState: { error }
  } = useController({ name });

  const id = useId();

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-slate-200">
        {label}
      </label>
      <div className="mb-8 mt-2">
        <input
          type={inputType}
          {...register(name, { valueAsNumber: inputType === 'number' })}
          id={id}
          min={0}
          max={18}
          placeholder={disabled ? dictionary.global.comingSoon : placeholder}
          className={`block w-full rounded-md border-0 bg-slate-600 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-300 ${
            disabled && 'opacity-50'
          }`}
          disabled={disabled}
        />
      </div>
      {error && (
        <ErrorMessageForm errorMessage={error.message ? error.message : dictionary.validation.defaultErrorMsg} />
      )}
    </div>
  );
}
