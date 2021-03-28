import React from 'react';
import Head from 'next/head';
import config from '../../data/config';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Link,
  SimpleGrid,
  useColorModeValue,
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
          Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.yellow" isExternal>Hack Club</Link>, club members recieve FREE perks.
        </Heading>
        </Container>
      </Box>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Heading as="h2" size="lg">Stickers</Heading>
            <Text fontSize="lg" mt={2}>Get free exclusive Hack Club stickers mailed straight to your door!</Text>
            <Link href="/benefits/stickers" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Heading as="h2" size="lg">Repl.it Hacker</Heading>
            <Text fontSize="lg" mt={2}>
              repl.it is an online IDE for coding in just about any language in your browser. We’ve secured Hacker plans for all Hack Clubbers, free for a year!
            </Text>
            <Link href="/benefits/replit" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Heading as="h2" size="lg">Notion Pro</Heading>
            <Text fontSize="lg" mt={2}>
              Notion is a popular tool for shared documents, databases, task lists, and more.
              It's great for planning projects, or even just to organize your lifestyle.
              Hack Club members get free Personal Pro Plan in their workspaces forever!
            </Text>
            <Link href="/benefits/notion" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Heading as="h2" size="lg">Figma Pro</Heading>
            <Text fontSize="lg" mt={2}>
              Figma is a design software that is real-time collaborative, all-online, and free to get started with.
              Hack Club members enjoy Pro Plan for free forever!
            </Text>
            <Link href="/benefits/figma" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Heading as="h2" size="lg" mt={2}>GitHub Student Developer Pack</Heading>
            <Text fontSize="lg">
              GitHub Student Developer Pack is a free GitHub program that provides students with free access to CS tools and services as long as you are a student.
            </Text>
            <Link href="/benefits/github" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Heading as="h2" size="lg">Adafruit</Heading>
            <Text fontSize="lg" mt={2}>
              Adafruit Industries designs, manufactures and sells a number of electronics products, electronics components, tools and accessories.
              If you are starting an electronics project it's a great place to visit. 
              All Hack Clubbers can receive a 10% discount on their orders.
            </Text>
            <Link href="/benefits/adafruit" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
