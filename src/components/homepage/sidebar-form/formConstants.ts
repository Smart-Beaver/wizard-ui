import type { RadioOptionInterface } from '@/components/data-entry/radio/types';
import { dictionary } from '@/libs/en';

export const STANDARDS = {
  PSP22: 'PSP22',
  PSP37: 'PSP37',
  PSP34: 'PSP34'
};

export const SUPPORTED_STANDARDS: RadioOptionInterface[] = [
  { label: STANDARDS.PSP22, value: STANDARDS.PSP22 },
  { label: STANDARDS.PSP34, value: STANDARDS.PSP34 },
  { label: STANDARDS.PSP37, value: STANDARDS.PSP37, disabled: true }
];

export const METADATA = [
  {
    label: dictionary.sidebarForm.sections.metadata.name.title,
    value: 'name',
    placeholder: dictionary.sidebarForm.sections.metadata.name.placeholder,
    inputType: 'text'
  },
  {
    label: dictionary.sidebarForm.sections.metadata.symbol.title,
    value: 'symbol',
    placeholder: dictionary.sidebarForm.sections.metadata.symbol.placeholder,
    inputType: 'text'
  },
  {
    label: dictionary.sidebarForm.sections.metadata.decimals.title,
    value: 'decimals',
    placeholder: dictionary.sidebarForm.sections.metadata.decimals.placeholder,
    inputType: 'number'
  }
] as const;

export const FEATURES_OPTIONS = [
  { label: dictionary.sidebarForm.sections.features.mintable, value: 'mintable' },
  { label: dictionary.sidebarForm.sections.features.burnable, value: 'burnable' },
  { label: dictionary.sidebarForm.sections.features.pausable, value: 'pausable' },
  { label: dictionary.sidebarForm.sections.features.capped, value: 'capped' }
] as const;

export const ACCESS_CONTROL: RadioOptionInterface[] = [
  { label: dictionary.sidebarForm.sections.accessControl.ownable, value: 'security/ownable' },
  { label: dictionary.sidebarForm.sections.accessControl.control, value: 'security/control', disabled: true }
];
