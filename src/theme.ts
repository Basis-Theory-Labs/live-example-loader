export const theme = {
  colors: {
    surface1: '#070a1b',
    surface2: '#191b24',
    surface3: '#1D1F2F',
    clickable: '#6272a4',
    base: '#f8f8f2',
    disabled: '#6272a4',
    hover: '#f8f8f2',
    accent: '#bd93f9',
    error: '#f8f8f2',
    errorSurface: '#44475a',
  },
  syntax: {
    plain: '#f8f8f2',
    comment: {
      color: '#6272a4',
      fontStyle: 'italic',
    },
    keyword: '#ff79c6',
    tag: '#ff79c6',
    punctuation: '#ff79c6',
    definition: '#eaa8ff',
    property: '#50fa7b',
    static: '#bd93f9',
    string: '#f1fa8c',
  },
  font: {
    body: '\'Inter\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '\'Source Code Pro\', "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: '12px',
    lineHeight: '20px',
  },
} as const;
