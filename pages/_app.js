import '../styles/globals.css';
import Head from 'next/head';
import config from '../data/config';
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../lib/theme';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{config.titleDefault}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <ChakraProvider theme={theme} resetCSS>
        <Navbar/>
        <Component {...pageProps}/>
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default MyApp;