import type { FC, ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="invisible absolute left-1/2 top-full z-10 mb-2 mt-2 min-w-[140px] -translate-x-1/2 transform rounded-md bg-teal-900 py-2 text-center text-sm text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
        {text}
        <div className="absolute bottom-8 left-1/2 z-0 h-4 w-4 origin-bottom-left -translate-x-2 rotate-45 transform bg-teal-900"></div>
      </div>
    </div>
  );
};
