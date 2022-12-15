import type { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
