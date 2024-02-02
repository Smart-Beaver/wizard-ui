import { useEffect, useRef } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';
import type { Tab } from '@/components/homepage/code-editor/useCodeEditorTabsLogic';
import { useCalculatedHeightData } from '@/contexts/HeightContext';
import type { WasmDataResponse } from '@/contexts/WasmDataContext';
import { cn } from '@/utils/helpers/cn';
import { useIsMounted } from '@/utils/hooks/useIsMounted';

interface TabsProps {
  activeTab: Tab['name'];
  handleActiveTab: (e: MouseEvent<HTMLButtonElement> | ChangeEvent<HTMLSelectElement>, fileName: string) => void;
  wasmFileData: WasmDataResponse[];
}

export default function CodeEditorTabs({ activeTab, handleActiveTab, wasmFileData }: TabsProps) {
  const codeEditorRef = useRef<HTMLDivElement>(null);
  const { setCodeEditorNavHeight } = useCalculatedHeightData();
  const isMounted = useIsMounted();

  useEffect(() => {
    const updateHeight = () => {
      setCodeEditorNavHeight(codeEditorRef.current?.clientHeight);
    };

    if (isMounted()) {
      updateHeight();
      window.addEventListener('resize', updateHeight);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div ref={codeEditorRef}>
      <div className="xl:hidden">
        <select
          id="tabs"
          name="tabs"
          className="w-full rounded-md border-slate-500 bg-slate-800 px-4 py-4 text-slate-300 hover:text-teal-500"
          value={activeTab}
          onChange={(e) => {
            handleActiveTab(e, e.target.value);
          }}
        >
          {wasmFileData.map((tab, tabIndex) => (
            <option key={tabIndex} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden xl:block">
        <nav className="isolate flex rounded-lg" aria-label="Tabs">
          {wasmFileData.map((tab, tabIndex) => (
            <button
              key={tabIndex}
              onClick={(e) => {
                handleActiveTab(e, tab.name);
              }}
              className={cn(
                tab.name === activeTab
                  ? 'border-b-2 border-teal-500 border-l-slate-500 bg-slate-600 text-teal-500'
                  : 'border-b border-slate-500 bg-slate-800 text-slate-300 hover:text-teal-500',
                tabIndex > 0 ? 'border-l' : '',
                tabIndex === 0 ? 'rounded-tl-lg' : '',
                tabIndex === wasmFileData.length - 1 ? 'rounded-tr-lg' : '',
                'group relative min-w-0 flex-1 cursor-pointer overflow-hidden border-b px-4 py-4 text-center text-sm font-medium transition duration-300 focus:z-10'
              )}
            >
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
