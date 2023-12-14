import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { dictionary } from '@/libs/en';

interface NavHeightContextType {
  navHeight: number | undefined;
  setNavHeight: Dispatch<SetStateAction<number | undefined>>;
  codeEditorNavHeight: number | undefined;
  setCodeEditorNavHeight: Dispatch<SetStateAction<number | undefined>>;
}

const HeightContext = createContext<NavHeightContextType | undefined>(undefined);

export const HeightContextProvider = ({ children }: { children: ReactNode }) => {
  const [navHeight, setNavHeight] = useState<number | undefined>(0);
  const [codeEditorNavHeight, setCodeEditorNavHeight] = useState<number | undefined>(0);

  return (
    <HeightContext.Provider value={{ navHeight, setNavHeight, codeEditorNavHeight, setCodeEditorNavHeight }}>
      {children}
    </HeightContext.Provider>
  );
};

export const useCalculatedHeightData = () => {
  const context = useContext(HeightContext);

  if (context === undefined) {
    throw new Error(dictionary.errors.useHeightData);
  }
  return context;
};
