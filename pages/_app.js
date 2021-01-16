import '../styles/globals.css';

import App, { Container } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

import { AuthProvider } from '../context/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <title>Links App</title>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
        />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Container>
  );
}
export default MyApp;
