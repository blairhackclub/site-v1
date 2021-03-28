import React from 'react';
import Head from 'next/head';
import config from '../../data/config';

import {
  Box,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function HonorCodePage() {
  return (
    <>
      <Head>
        <title>Benefits Honor Code{config.titleSuffix}</title>
      </Head>

      <Box bg="brand.red">
        <Container maxW="container.lg" p={8} align="center">
        <Heading as="h1" size="xl" my={2} color="white">
          Benefits Honor Code
        </Heading>
        <Heading as="h2" size="md" my={2} color="white" fontWeight="normal">
          With great power comes great responsibility. Please follow the honor code so that we can continue to offer these amazing benefits and perks.
        </Heading>
        </Container>
      </Box>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">BENEFITS HONOR CODE</Heading>
        <Heading as="h1" size="2xl" my={2} color="brand.red">
          The honor code is coming soon.
        </Heading>
      </Container>
    </>
  )
}
