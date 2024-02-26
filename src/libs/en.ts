export const dictionary = {
  meta: {
    title: 'Smart Beaver',
    description:
      'An interactive smart contract wizard. Generate ink! code for popular standards like PSP-22 and PSP-34.',
    ogTwitter: {
      title: 'Smart Beaver',
      description:
        'An interactive smart contract wizard. Generate ink! code for popular standards like PSP-22 and PSP-34.'
    },
    ogFacebook: {
      title: 'Smart Beaver',
      description:
        'An interactive smart contract wizard. Generate ink! code for popular standards like PSP-22 and PSP-34.'
    }
  },
  global: {
    comingSoon: 'Coming soon!'
  },
  validation: {
    defaultErrorMsg: 'Error'
  },
  navBar: {
    altLogoText: 'smart beaver logo',
    emailTooltip: 'Copy to clipboard',
    links: {
      docs: 'Docs',
      github: 'GitHub'
    }
  },
  codeEditor: {
    button: 'Copy to clipboard',
    error: {
      altImage: 'error image',
      button: "Let's try again"
    },
    toast: { success: 'You bea(ve)r it in your clipboard now! 🦫', error: 'Failed to copy code to clipboard' }
  },
  sidebarForm: {
    notAvailable: 'Configuration for this standard is not available yet. Come back soon!',
    resetFormButton: 'Reset',
    selectStandard: 'Select standard',
    configure: 'Configure',
    beaverMemo: {
      paragraph: 'Fill in at least one field to deploy a smart contract with',
      memo: 'Beaver memo',
      metadata: 'metadata'
    },
    sections: {
      singleFile: {
        title: 'Single file'
      },
      metadata: {
        title: 'Settings',
        name: {
          title: 'Name',
          placeholder: 'Token name'
        },
        symbol: {
          title: 'Symbol',
          placeholder: 'Symbol, eg. BTC or custom'
        },
        decimals: {
          title: 'Decimals',
          placeholder: 'Decimal from 0 to 18',
          validation: {
            decimalNumberTooLow: 'Decimals must be at least 0',
            decimalNumberTooHigh: 'Decimals must be no greater than 18'
          }
        }
      },
      features: {
        title: 'Features',
        mintable: 'Mintable',
        burnable: 'Burnable',
        pausable: 'Pausable',
        capped: 'Capped',
        enumerable: 'Enumerable'
      },
      accessControl: {
        title: 'Access control',
        ownable: 'Ownable',
        control: 'Control'
      },
      license: {
        sectionTitle: 'License',
        inputTitle: 'License name',
        placeholder: 'License name'
      }
    }
  },
  mobileVersion: {
    title: 'Thank you for using Smart Beaver!',
    desktopResolution: {
      pleaseNote: 'Please note that Smart Beaver currently supports only',
      desktop: 'desktop resolutions',
      optimalExperience: 'for the optimal user experience.'
    },
    recommended: 'We recommend accessing the application on a desktop device.'
  },
  //This is a part you need to delete together with psp34disclaimermodal
  modal: {
    title: 'Disclaimer',
    description: "The final implementation of PSP34 is still in progress, and we'll update it when it's ready.",
    button: 'Ok, thanks'
  },
  errors: {
    useWasmData: 'useWasmData must be used within a WasmDataProvider',
    useSidebarFormSubmit: 'Something went wrong while generating code',
    useHeightData: 'useHeightData must be used within a HeightDataProvider'
  }
} as const;
