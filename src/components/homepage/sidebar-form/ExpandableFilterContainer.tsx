import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/shared/Button';
import { dictionary } from '@/libs/en';
import type { ChildrenInterface } from '@/utils/types/globals';

interface ExpandableFilterContainerProps extends ChildrenInterface {
  name: string;
  onReset?: () => void;
}

export default function ExpandableFilterContainer({ children, name, onReset }: ExpandableFilterContainerProps) {
  return (
    <Disclosure as="div" className="border-b pb-3 transition duration-200 hover:text-teal-500">
      {({ open }) => (
        <>
          <h3 className="flow-root pt-6">
            <Disclosure.Button className="text-gray-400 hover:text-gray-500 flex w-full items-center justify-between bg-slate-900 pb-3 text-sm">
              <span className="text-gray-900 font-medium">{name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pb-3">
            <div className="space-y-4 break-words">{children}</div>
            {onReset && (
              <div className="mt-2 flex w-full justify-end">
                <Button intent="iconButton" icon="close" onClick={onReset}>
                  {dictionary.sidebarForm.resetFormButton}
                </Button>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
