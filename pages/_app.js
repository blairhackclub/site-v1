import '../styles/globals.css';
import Head from 'next/head';
import config from '../config';
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{config.titleDefault}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;