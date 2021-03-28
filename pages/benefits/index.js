import React from 'react';
import Head from 'next/head';
import config from '../../data/config';
import stickers from '../../data/stickers';

import {
  Box,
  Flex,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  Image,
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
        <Text mt={4} color="white" fontWeight="normal">
          By claiming benefits, you agree to the <Link href="/benefits/honorcode" fontWeight="bold">Benefits Honor Code</Link>.
        </Text>
        </Container>
      </Box>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg">Stickers</Heading>
              <Text fontSize="lg" mt={2}>Get free exclusive Hack Club stickers mailed straight to your door!</Text>
              <Stack direction="row" mt={2} spacing={4} justify="center">
                {stickers.slice(0,3).map(sticker =>
                  <Flex align="center" justify="center">
                    <Image w={20} src={sticker.image} key={sticker.label}/>
                  </Flex>
                )}
              </Stack>
            </Box>
            <Link href="/benefits/stickers" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg">Repl.it Hacker</Heading>
              <Text fontSize="lg" mt={2}>
                repl.it is an online IDE for coding in just about any language in your browser. We’ve secured Hacker plans for all Hack Clubbers, free for a year!
              </Text>
            </Box>
            <Link href="/benefits/replit" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg">Notion Pro</Heading>
              <Text fontSize="lg" mt={2}>
                Notion is a popular tool for shared documents, databases, task lists, and more.
                It's great for planning projects, or even just to organize your lifestyle.
                Hack Club members get free Personal Pro Plan in their workspaces forever!
              </Text>
            </Box>
            <Link href="/benefits/notion" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg">Figma Pro</Heading>
              <Text fontSize="lg" mt={2}>
                Figma is a design software that is real-time collaborative, all-online, and free to get started with.
                Hack Club members enjoy Pro Plan for free forever!
              </Text>
            </Box>
            <Link href="/benefits/figma" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg" mt={2}>GitHub Student Developer Pack</Heading>
              <Text fontSize="lg">
                GitHub Student Developer Pack is a free GitHub program that provides students with free access to CS tools and services as long as you are a student.
              </Text>
            </Box>
            <Link href="https://education.github.com/pack" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg">Adafruit</Heading>
              <Text fontSize="lg" mt={2}>
                Adafruit Industries designs, manufactures and sells a number of electronics products, electronics components, tools and accessories.
                If you are starting an electronics project it's a great place to visit. 
                All Hack Clubbers can receive a 10% discount on their orders.
              </Text>
            </Box>
            <Link href="/benefits/adafruit" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">THANKS TO OUR SPONSORS</Heading>
        <Stack direction="row" spacing={8} justify="center" m={4}>
          <Flex align="center" justify="center">
            <Link href="https://hackclub.com" isExternal><Image h={24} src="https://assets.hackclub.com/icon-rounded.png"/></Link>
          </Flex>
            <Flex align="center" justify="center">
          <Link href="https://stickermule.com" isExternal><Image w={36} h="auto" src="https://cdn.freebiesupply.com/logos/large/2x/sticker-mule-logo-svg-vector.svg"/></Link>
          </Flex>
          <Flex align="center" justify="center">
            <Link href="https://replit.com" isExternal><Image w={36} h="auto" src="https://lh3.googleusercontent.com/wy5o0ijAE-l9Ru4g2ft84wjHzhURtzumh_M36frnTDOSTNsXivUBZQgu4cWQXs4BQ0is0yepDESHAtFfpSnyVrwHtx2qA4U6f_2-"/></Link>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
