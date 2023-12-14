import CodeEditor from '@/components/homepage/code-editor/CodeEditor';
import SidebarForm from '@/components/homepage/sidebar-form/SidebarForm';
import { useCalculatedHeightData } from '@/contexts/HeightContext';
import { WasmDataProvider } from '@/contexts/WasmDataContext';

export default function Home() {
  const { navHeight } = useCalculatedHeightData();

  return (
    <WasmDataProvider>
      <div className="form-code-main-grid-cols grid w-full grow justify-start gap-8 px-10 pt-6">
        <div
          // 40 is the height of the padding of the parent div
          style={{ height: `calc(100vh - ${navHeight}px - 40px)` }}
          className="scrollbar col-span-1 overflow-y-auto pl-0.5 pr-4"
        >
          <SidebarForm />
        </div>
        <div className="col-span-3 h-fit grow rounded-lg bg-slate-600">
          <CodeEditor />
        </div>
      </div>
    </WasmDataProvider>
  );
}
