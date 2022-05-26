import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { PrismicProvider } from '@prismicio/react';
import { prismicClient } from '../services/prismic';

import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <PrismicProvider client={prismicClient}>
        <Header />
        <Component {...pageProps} />
      </PrismicProvider>
    </SessionProvider>
  );
}

export default MyApp;
