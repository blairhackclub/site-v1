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
        <link rel="icon" href="/favicon.png" />

        <meta name="description" content={config.description}/>
        <meta property="og:title" content={config.titleDefault} key="ogtitle"/>
        <meta property="og:description" content={config.description} key="ogdesc"/>
        <meta property="og:image" content={config.image} key="ogimage"/>
        <meta property="og:site_name" content={config.titleDefault} key="ogsitename"/>
        <meta property="og:url" content={config.url} key="ogurl"/>
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