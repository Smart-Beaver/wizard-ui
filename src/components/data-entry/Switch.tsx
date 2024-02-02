import { Switch as HeadlessSwitch } from '@headlessui/react';
import { useController } from 'react-hook-form';
import { ErrorMessageForm } from '@/components/data-entry/ErrorMessageForm';
import { dictionary } from '@/libs/en';
import { cn } from '@/utils/helpers/cn';

interface SwitchProps {
  label?: string;
  name: string;
  disabled?: boolean;
}

export default function Switch({ name, label, disabled }: SwitchProps) {
  const {
    fieldState: { error },
    field: { onChange, ...restField }
  } = useController({ name });

  return (
    <>
      <HeadlessSwitch.Group as="div" className="items-left flex gap-8 py-6">
        <HeadlessSwitch
          {...restField}
          onChange={(e) => {
            onChange(e);
          }}
          disabled={disabled}
          className={cn(
            'border-transparent relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 ',
            restField.value ? 'bg-teal-600' : 'bg-transparent',
            disabled && 'opacity-50'
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
              restField.value ? 'translate-x-5' : 'translate-x-0'
            )}
          />
        </HeadlessSwitch>
        {label && (
          <HeadlessSwitch.Label as="div">
            <div className="font-medium text-teal-600">{label}</div>
          </HeadlessSwitch.Label>
        )}
      </HeadlessSwitch.Group>
      {error && (
        <ErrorMessageForm errorMessage={error.message ? error.message : dictionary.validation.defaultErrorMsg} />
      )}
    </>
  );
}
