import React from 'react';
import Head from 'next/head';
import config from '../../data/config';

import {
  Box,
  Container,
  Heading,
  Link,
} from '@chakra-ui/react';

export default function BenefitsPage() {
  return (
    <>
      <Head>
        <title>Benefits{config.titleSuffix}</title>
      </Head>

      <Box bg="brand.red">
        <Container maxW="container.lg" p={8} align="center">
        <Heading as="h1" size="xl" my={2} color="white">
          Benefits
        </Heading>
        <Heading as="h2" size="md" my={2} color="white" fontWeight="normal">
          Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.yellow" isExternal>Hack Club</Link>, clubs members recieve FREE perks.
        </Heading>
        </Container>
      </Box>
    </>
  )
}
