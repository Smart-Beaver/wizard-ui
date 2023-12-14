import hljs from 'highlight.js/lib/core';
import rust from 'highlight.js/lib/languages/rust';
import yaml from 'highlight.js/lib/languages/yaml';
import CodeEditorTabs from '@/components/homepage/code-editor/CodeEditorTabs';
import ResponseError from '@/components/homepage/code-editor/ResponseError';
import useCodeEditorTabsLogic from '@/components/homepage/code-editor/useCodeEditorTabsLogic';
import { Button } from '@/components/shared/Button';
import SpinnerLoader from '@/components/shared/SpinnerLoader';
import { useCalculatedHeightData } from '@/contexts/HeightContext';
import { useWasmData } from '@/contexts/WasmDataContext';
import { dictionary } from '@/libs/en';
import { copyToClipboard } from '@/utils/helpers/copyToClipboard';

hljs.registerLanguage('rust', rust);
hljs.registerLanguage('yaml', yaml);

const CARGO_TOML_TAB = 'Cargo.toml';

export default function CodeEditor() {
  const { activeTab, handleActiveTab } = useCodeEditorTabsLogic();
  const { wasmFileData, wasmCodeFetchingError } = useWasmData();
  const { navHeight, codeEditorNavHeight } = useCalculatedHeightData();

  const code = wasmFileData.find(({ name }) => name === activeTab)?.content ?? '';
  const highlightedCode = hljs.highlight(code, { language: 'rust' }).value;
  const cargoTomlTabActive = activeTab === CARGO_TOML_TAB;
  const codeEditorHeight = `calc(100vh - ${navHeight}px - ${codeEditorNavHeight}px - 40px - 16px)`;
  // 40 and 16 are the height of the button and the padding of the parent div

  if (wasmCodeFetchingError) {
    return (
      <div className="relative w-full">
        <div className="flex w-full items-center justify-center" style={{ height: codeEditorHeight }}>
          <ResponseError errorMessage={wasmCodeFetchingError} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {!highlightedCode ? (
        <div className="flex w-full items-center justify-center" style={{ height: codeEditorHeight }}>
          <SpinnerLoader />
        </div>
      ) : (
        <>
          <CodeEditorTabs activeTab={activeTab} handleActiveTab={handleActiveTab} wasmFileData={wasmFileData} />
          <div className="relative py-2 pl-8">
            <Button onClick={() => copyToClipboard(code)} intent="secondary" className="absolute right-5 top-5">
              {dictionary.codeEditor.button}
            </Button>
            <div className="scrollbar w-full overflow-auto" style={{ height: codeEditorHeight }}>
              {code && !cargoTomlTabActive ? (
                <pre className="main-tab text-white">
                  <code className="language-rust" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                </pre>
              ) : (
                <pre className="cargo-tab text-main-keyword">
                  <code className="language-yaml" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                </pre>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
