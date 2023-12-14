import { XMarkIcon } from '@heroicons/react/24/solid';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  [
    'focus-visible:ring-inset-2',
    'rounded-md',
    'font-semibold shadow-sm',
    'focus-visible:ring-2',
    'focus-visible:ring-teal-100',
    'text-sm',
    'px-3',
    'py-2'
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-teal-900',
          'text-teal-500',
          'active:bg-teal-500',
          'active:text-teal-950',
          'hover:bg-teal-600',
          'hover:text-teal-950'
        ],
        secondary: ['bg-teal-500', 'text-teal-950', 'hover:bg-teal-600'],
        iconButton: ['bg-transparent', 'text-slate-400', 'hover:bg-teal-900', 'hover:text-teal-500']
      },
      disabled: {
        true: ['pointer-events-none', 'opacity-50'],
        false: ['']
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  }
);

const buttonIconType = {
  close: <XMarkIcon />
};

type IconType = keyof typeof buttonIconType;
const IconComponent = ({ icon }: { icon: IconType }) => buttonIconType[icon];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  disabled?: boolean;
  icon?: IconType;
}

export const Button = ({ className, intent, icon, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ intent, className, disabled })}>
      <div className="flex w-full flex-row items-center justify-center gap-2">
        {icon && (
          <div className="h-5 w-5">
            <IconComponent icon={icon} />
          </div>
        )}
        {props.children}
      </div>
    </button>
  );
};
