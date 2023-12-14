import type { WasmDataResponse } from '@/contexts/WasmDataContext';

export const sortWasmResults = (files: WasmDataResponse[]): WasmDataResponse[] => {
  const libFileIndex = files.findIndex((file) => file.name === 'lib.rs');
  if (libFileIndex > -1) {
    const [libFile] = files.splice(libFileIndex, 1);
    files.unshift(libFile);
  }
  return files;
};
