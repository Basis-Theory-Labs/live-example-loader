import React, { useEffect, useState } from 'react';
import type { SandpackProviderProps } from '@codesandbox/sandpack-react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';

export const App = () => {
  const [scriptInjected, setScriptInjected] = useState(false);
  const [options, setOptions] = useState<SandpackProviderProps>();
  const { EXAMPLE_SCRIPT_WINDOW_VAR, EXAMPLE_SCRIPT_URL } = process.env;

  useEffect(() => {
    let script;

    if (!scriptInjected && EXAMPLE_SCRIPT_URL && EXAMPLE_SCRIPT_WINDOW_VAR) {
      script = document.createElement('script');

      script.src = EXAMPLE_SCRIPT_URL;
      script.async = true;
      script.crossOrigin = '';
      script.addEventListener('load', () => {
        setOptions(window[EXAMPLE_SCRIPT_WINDOW_VAR]);
      });

      document.head.append(script);
      setScriptInjected(true);
    }

    return () => {
      script?.remove();
    };
  }, [scriptInjected, EXAMPLE_SCRIPT_URL, EXAMPLE_SCRIPT_WINDOW_VAR]);

  // eslint-disable-next-line unicorn/no-null
  return !options ? null : (
    <SandpackProvider style={{ height: '100%' }} theme="auto" {...options}>
      <SandpackLayout
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};
