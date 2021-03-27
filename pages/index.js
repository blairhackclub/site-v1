import React from 'react';
import Head from 'next/head';
import config from '../config';

import {
  Box,
  Container,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  Image,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home{config.titleSuffix}</title>
      </Head>

      <Box bg="brand.red">
        <Container maxW="container.lg" px={8} py={24} align="center">
          <Heading as="h1" size="2xl" my={2} color="white">
            Blair Hack Club
          </Heading>
          <Heading as="h2" size="lg" my={2} color="white" fontWeight="normal">
            A creative coding club where you can learn, share, and hack.
          </Heading>
        </Container>
      </Box>

      <Container maxW="container.xl" p={12} pt={16}>
        <Heading as="h2" size="md" color="brand.muted">WHO WE ARE</Heading>
        <Heading as="h1" size="2xl" my={2}>
          We are a club for <Text as="span" color="brand.orange" style={{ whiteSpace: "pre" }}>creative coding</Text>.
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          Each week, we gather to do coding workshops, create awesome things, and share our creations.
        </Text>
      </Container>

      <Container maxW="container.xl" px={12} py={6}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Image 
            src="" fallbackSrc="https://via.placeholder.com/300"
            boxSize={{ base: "100%", md: "50%" }}
            borderRadius={24}
          />
          <Box flex={1} pl={{ base: 0, md: 12 }} py={4} pt={{ base: 12, md: 0 }}>
            <Heading as="h2" size="md" color="brand.muted">WHY YOU SHOULD JOIN</Heading>
            <Stack direction="column" my={2} spacing={4}>
              <Box>
                <Heading as="h1" size="lg">
                  You don't need to know how to code
                </Heading>
                <Text fontSize="xl">
                  We'll teach you!
                </Text>
              </Box>
              <Box>
                <Heading as="h1" size="lg">
                  Learn new things
                </Heading>
                <Text fontSize="xl">
                  There's always something new to learn and hack in Computer Science.
                </Text>
              </Box>
              <Box>
                <Heading as="h1" size="lg">
                  Code with others
                </Heading>
                <Text fontSize="xl">
                  Chill and hang out with us, and learn a few things along the way!
                </Text>
              </Box>
              <Box>
                <Heading as="h1" size="lg">
                  Free #SWAG and tools!
                </Heading>
                <Text fontSize="xl">
                  Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="orange" isExternal>Hack Club</Link>, 
                  club members receive FREE stickers, repl.it Hacker, Notion Pro, Figma Pro, and more!
                </Text>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
