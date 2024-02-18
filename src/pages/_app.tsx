/* eslint-disable */

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../i18n/config';
import Head from 'next/head';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import { store } from '../redux/store';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <Head>
        <title>Testing</title>
      </Head>
      <DefaultLayout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>      </DefaultLayout>
      <GlobalStyle />
    </>

  );
}
