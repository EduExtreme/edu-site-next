import type { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import NavMenu from '../components/NavMenu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavMenu />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
