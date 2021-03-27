import React from 'react';
import Head from 'next/head';
import config from '../data/config';

import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404!{config.titleSuffix}</title>
      </Head>

      <Flex minH="100vh" align="center" justify="center">
        <Box align="center">
          <Heading as="h1" size="2xl" color="brand.red">404!</Heading>
          <Text fontSize="lg">Sorry, that page isn't here.</Text>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button colorScheme="red" mt={4}>🏠 Go Home</Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
