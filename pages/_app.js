import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
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
        <meta property="og:title" content={config.titleDefault} key="ogtitle"/>
        <link rel="icon" href="/favicon.png" />

        <meta property="og:image" content={config.image} key="ogimage"/>
        <meta property="og:site_name" content={config.titleDefault} key="ogsitename"/>
        <meta name='theme-color' content={config.color}/>
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