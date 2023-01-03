import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900:#03002e;
    --blue-800:#000059;
    --blue-700:#14279B;
    --blue-600:#001E6C;
    --blue-500:#0A043C;
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
    /* background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%); */


background-color: #0b78ff;
background-image: linear-gradient(19deg, #0b78ff 0%, #14001e 100%);








;
  }
  `;
