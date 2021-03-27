import React from 'react';
import Head from 'next/head';
import config from '../config';

import {
  Container,
  Heading,
  Link,
  Button,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home{config.titleSuffix}</title>
      </Head>

      <Container 
        maxW="container.md" p={8} pt={16}
        align="center"
      >
        <Heading as="h1" size="xl" my={2} color="brand.red" fontWeight="extrabold">Blair Hack Club</Heading>
        <Heading as="h2" size="md" fontWeight="normal" my={2} color="brand.muted">
          A creative coding club where you can learn, share, and hack.
        </Heading>

        <Heading as="h3" size="md" mt={8}>This page is under construction. 🚧</Heading>
        <Link href="https://tinyurl.com/blairhackclub" style={{ textDecoration: "none" }}>
          <Button colorScheme="red" mt={2}>View our temporary site</Button>
        </Link>
      </Container>
    </>
  );
}
