import type { RadioOptionInterface } from '@/components/data-entry/radio/types';
import { dictionary } from '@/libs/en';

export type PSPUnion = (typeof STANDARDS)[keyof typeof STANDARDS];

export const STANDARDS = {
  PSP22: 'PSP22',
  PSP34: 'PSP34'
} as const;

export const SUPPORTED_STANDARDS: RadioOptionInterface[] = [
  { label: STANDARDS.PSP22, value: STANDARDS.PSP22 },
  { label: STANDARDS.PSP34, value: STANDARDS.PSP34 }
];

export const METADATA22 = [
  {
    label: dictionary.sidebarForm.sections.metadata.name.title,
    name: 'name',
    placeholder: dictionary.sidebarForm.sections.metadata.name.placeholder,
    inputType: 'text',
    disabled: false
  },
  {
    label: dictionary.sidebarForm.sections.metadata.symbol.title,
    name: 'symbol',
    placeholder: dictionary.sidebarForm.sections.metadata.symbol.placeholder,
    inputType: 'text',
    disabled: false
  },
  {
    label: dictionary.sidebarForm.sections.metadata.decimals.title,
    name: 'decimals',
    placeholder: dictionary.sidebarForm.sections.metadata.decimals.placeholder,
    inputType: 'number',
    disabled: false
  }
] as const;

export const METADATA34 = [
  {
    label: dictionary.sidebarForm.sections.metadata.name.title,
    name: 'name',
    placeholder: dictionary.sidebarForm.sections.metadata.name.placeholder,
    inputType: 'text',
    disabled: true
  },
  {
    label: dictionary.sidebarForm.sections.metadata.symbol.title,
    name: 'symbol',
    placeholder: dictionary.sidebarForm.sections.metadata.symbol.placeholder,
    inputType: 'text',
    disabled: true
  }
] as const;

export const METADATA: { [key in keyof typeof STANDARDS]: typeof METADATA22 | typeof METADATA34 } = {
  PSP22: METADATA22,
  PSP34: METADATA34
};

export const FEATURES_OPTIONS22 = [
  { label: dictionary.sidebarForm.sections.features.mintable, name: 'mintable', disabled: false },
  { label: dictionary.sidebarForm.sections.features.burnable, name: 'burnable', disabled: false },
  { label: dictionary.sidebarForm.sections.features.pausable, name: 'pausable', disabled: false },
  { label: dictionary.sidebarForm.sections.features.capped, name: 'capped', disabled: false }
] as const;

export const FEATURES_OPTIONS34 = [
  { label: dictionary.sidebarForm.sections.features.mintable, name: 'mintable', disabled: false },
  { label: dictionary.sidebarForm.sections.features.burnable, name: 'burnable', disabled: false },
  { label: dictionary.sidebarForm.sections.features.enumerable, name: 'enumerable', disabled: true }
] as const;

export const FEATURES_OPTIONS: {
  [key in keyof typeof STANDARDS]: typeof FEATURES_OPTIONS22 | typeof FEATURES_OPTIONS34;
} = {
  PSP22: FEATURES_OPTIONS22,
  PSP34: FEATURES_OPTIONS34
};

export const ACCESS_CONTROL22: RadioOptionInterface[] = [
  { label: dictionary.sidebarForm.sections.accessControl.ownable, value: 'security/ownable' },
  { label: dictionary.sidebarForm.sections.accessControl.control, value: 'security/control', disabled: true }
];

export const ACCESS_CONTROL34: RadioOptionInterface[] = [
  { label: dictionary.sidebarForm.sections.accessControl.ownable, value: 'security/ownable' }
];

export const ACCESS_CONTROL: {
  [key in keyof typeof STANDARDS]: RadioOptionInterface[];
} = {
  PSP22: ACCESS_CONTROL22,
  PSP34: ACCESS_CONTROL34
};
