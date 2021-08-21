import React from 'react';
import Head from 'next/head';
import config from '../../data/config';

import Benefits from '../../components/Benefits';

import {
  Box,
  Container,
  Button,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export default function ReplitPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Replit – Benefits{config.titleSuffix}</title>
        <meta property="og:title" content={`Replit – Benefits${config.titleSuffix}`} key="ogtitle"/>
        <meta name="description" content="An online IDE for coding in just about any language in your browser."/>
        <meta property="og:description" content="An online IDE for coding in just about any language in your browser." key="ogdesc"/>
      </Head>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted"><Link href="/benefits">BENEFITS</Link></Heading>
        <Heading as="h1" size="2xl" my={2} color="brand.blue">
          Replit
        </Heading>

        <Button mt={4} colorScheme="blue" onClick={() => setModalOpen(true)}>Request Replit Hacker</Button>
        <Benefits benefit="repl.it" open={modalOpen} setOpen={setModalOpen}/>
      </Container>

      <Container maxW="container.xl" p={12} pt={16}>
        <Heading as="h2" size="md" color="brand.muted">WHAT IT IS</Heading>
        <Heading as="h1" size="2xl" my={2}>
          We use <Link href="https://replit.com" color="brand.blue" isExternal>Replit</Link> to code.
        </Heading>
        <Text fontSize="xl" maxW="container.md" mt={4}>
          Replit is our recommended IDE for coding.
          We use Replit because it is efficient, easy to use, and can be used anywhere.
          School computers currently block or don't come prepared with tools or support for some languages,
          and Replit allows you to code in almost every language, anywhere, and on any device.
        </Text>
        <Text fontSize="xl" maxW="container.md" mt={4}>
          Replit Hacker plan brings support for more powerful repls for bigger projects, 
          private repls for code that you wanna keep private, 
          and an overall better coding experience.
        </Text>
      </Container>
    </>
  )
}
