import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';
import { dictionary } from '@/libs/en';

export interface WasmDataResponse {
  content: string;
  name: string;
}

interface WasmDataContextType {
  wasmFileData: WasmDataResponse[];
  setWasmFileData: Dispatch<SetStateAction<WasmDataResponse[]>>;
  wasmCodeFetchingError: string;
  setWasmCodeFetchingError: Dispatch<SetStateAction<string>>;
}

const WasmDataContext = createContext<WasmDataContextType | undefined>(undefined);

export const WasmDataProvider = ({ children }: { children: ReactNode }) => {
  const [wasmFileData, setWasmFileData] = useState<WasmDataResponse[]>([]);
  const [wasmCodeFetchingError, setWasmCodeFetchingError] = useState<string>('');

  return (
    <WasmDataContext.Provider
      value={{ wasmFileData, setWasmFileData, wasmCodeFetchingError, setWasmCodeFetchingError }}
    >
      {children}
    </WasmDataContext.Provider>
  );
};

export const useWasmData = () => {
  const context = useContext(WasmDataContext);
  if (context === undefined) {
    throw new Error(dictionary.errors.useWasmData);
  }
  return context;
};
