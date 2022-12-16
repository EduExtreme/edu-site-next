import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900:#0f172a;
    --blue-800:#1e40af;
    --blue-700:#1d4ed8;
    --blue-600:#2563eb;
    --blue-500:#3b82f6;
    --blue-400:#38bdf8;
    --blue-300:#7dd3fc;
    --blue-200:#bfdbfe;
    --blue-100:#e0e7ff;
    --blue-50:#eff6ff;
    --white: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {    
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    height: 100%;
    background: var(--blue-100);
  }
  `;
