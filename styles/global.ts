import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900:#164E63;
    --blue-800:#075985;
    --blue-700:#0E7490;
    --blue-600:#0891B2;
    --blue-500:#06B6D4;
    --blue-400:#22D3EE;
    --blue-300:#67E8F9;
    --blue-200:#A5F3FC;
    --blue-100:#CFFAFE;
    --blue-50:#ECFEFF;
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
