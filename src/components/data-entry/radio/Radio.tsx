'use client';
import { RadioGroup } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import { useController } from 'react-hook-form';
import { ErrorMessageForm } from '@/components/data-entry/ErrorMessageForm';
import type { RadioOptionInterface } from '@/components/data-entry/radio/types';
import { dictionary } from '@/libs/en';
import { cn } from '@/utils/helpers/cn';

const radio = cva(
  [
    'focus-visible:ring-inset-2',
    'focus-visible:ring-2',
    'focus-visible:ring-teal-100',
    'text-sm',
    'px-2.5',
    'py-2',
    'w-fit',
    'grow',
    'cursor-pointer'
  ],
  {
    variants: {
      classic: {
        unchecked: [
          'bg-transparent',
          'text-teal-500',
          'border',
          'border-teal-500',
          'hover:bg-teal-900',
          'hover:text-teal-500',
          'rounded-full'
        ],
        checked: ['bg-teal-500', 'text-teal-950', 'hover:bg-teal-600', 'rounded-full']
      },
      minimalist: {
        unchecked: ['bg-teal-700', 'text-teal-900', 'rounded-md', 'border-none'],
        checked: ['bg-teal-500', 'text-black', 'rounded-md', 'hover:bg-teal-600', 'hover:text-black']
      },
      disabled: {
        true: ['pointer-events-none', 'opacity-40'],
        false: ['']
      }
    },
    defaultVariants: {
      classic: 'unchecked'
    }
  }
);

interface RadioProps {
  name: string;
  options: RadioOptionInterface[];
  className?: string;
  variant?: 'minimalist' | 'classic';
}

export function Radio({ options, name, className, variant = 'classic' }: RadioProps) {
  const {
    fieldState: { error },
    field: { onChange, ...restField }
  } = useController({ name });

  return (
    <>
      <RadioGroup {...restField} onChange={onChange}>
        <div className={'flex justify-between gap-3 ' + className}>
          {options.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className={cn(
                radio({
                  [variant]: option.value === restField.value ? 'checked' : 'unchecked',
                  disabled: option.disabled
                })
              )}
            >
              <span className="flex items-center justify-center gap-2 font-semibold">
                {variant === 'classic' && (
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full ${
                      option.value === restField.value ? 'border-[6px]' : 'border'
                    }`}
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" />
                  </span>
                )}
                <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
              </span>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      {error && (
        <ErrorMessageForm errorMessage={error.message ? error.message : dictionary.validation.defaultErrorMsg} />
      )}
    </>
  );
}
