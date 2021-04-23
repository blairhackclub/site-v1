import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';
import config from '../data/config';
import { ChakraProvider, Fade } from "@chakra-ui/react";
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
        <Fade in={true}>
          <Navbar/>
          <Component {...pageProps}/>
          <Footer/>
        </Fade>
      </ChakraProvider>
    </>
  );
}

export default MyApp;