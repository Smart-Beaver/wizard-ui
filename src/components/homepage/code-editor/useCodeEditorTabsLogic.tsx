import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';
import { useWasmData } from '@/contexts/WasmDataContext';

const DEFAULT_ACTIVE_FILE_NAME = 'lib.rs';

export interface Tab {
  name: string;
  code: string;
}

export default function useCodeEditorTabsLogic() {
  const { wasmFileData } = useWasmData();
  const [activeTab, setActiveTab] = useState<Tab['name']>(wasmFileData[0]?.name);

  const defaultActiveTab =
    wasmFileData.find((file) => file.name === DEFAULT_ACTIVE_FILE_NAME)?.name ?? wasmFileData[0]?.name;

  const handleActiveTab = (e: SyntheticEvent<HTMLButtonElement | HTMLSelectElement>, tab: Tab['name']) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab(defaultActiveTab);
  }, [defaultActiveTab]);

  return { activeTab, handleActiveTab };
}
