import React from 'react';
import Head from 'next/head';
import config from '../../data/config';
import stickers from '../../data/stickers';

import Header from '../../components/Header';

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

      <Header title="Benefits">
        <Heading as="h2" size="md" my={2} color="white" fontWeight="normal">
          Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.yellow" isExternal>Hack Club</Link>, club members recieve FREE perks.
        </Heading>
        <Text mt={4} color="white" fontWeight="normal">
          By claiming benefits, you agree to the <Link href="/benefits/honorcode" fontWeight="bold">Benefits Honor Code</Link>.
        </Text>
      </Header>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg">Stickers</Heading>
              <Text fontSize="lg" mt={2}>Get free exclusive Hack Club stickers mailed straight to your door!</Text>
              <Stack direction="row" mt={2} spacing={4} justify="center">
                {stickers.slice(0,3).map(sticker =>
                  <Flex align="center" justify="center" key={sticker.label}>
                    <Image w={20} src={sticker.image}/>
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
              <Flex align="center" justify="center" m={4}>
                <Image w={40} src="https://lever-client-logos.s3.us-west-2.amazonaws.com/e99ed897-4b15-4142-acb5-615c2df6b3c2-1615515751109.png"/>
              </Flex>
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
                Hack Clubbers get free Personal Pro Plan in their workspaces while they are a student.
              </Text>
              <Flex align="center" justify="center" m={4}>
                <Image w={20} src="https://cdn.iconscout.com/icon/free/png-256/notion-1693557-1442598.png"/>
              </Flex>
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
                Hack Clubbers enjoy free Pro Plan while they are a student.
              </Text>
              <Flex align="center" justify="center" m={4}>
                <Image w={20} src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"/>
              </Flex>
            </Box>
            <Link href="/benefits/figma" style={{ textDecoration: "none" }}>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("blue.100", "blue.400")} borderRadius={16}>
            <Box minH={200}>
              <Heading as="h2" size="lg" mt={2}>GitHub Student Developer Pack</Heading>
              <Text fontSize="lg">
                GitHub Student Developer Pack is a free GitHub program that provides students with 
                free access to CS tools and services as long as you are a student.
              </Text>
              <Flex align="center" justify="center" m={4}>
                <Image w={20} src="https://education.github.com/assets/sdp-backpack-a64038716bf134f45e809ff86b9611fb97e41bbd2ccfa3181da73cf164d3c200.png"/>
              </Flex>
            </Box>
            <Link href="https://education.github.com/pack" style={{ textDecoration: "none" }} isExternal>
              <Button colorScheme="blackAlpha" color="white" mt={3}>Claim benefit</Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">THANKS TO OUR SPONSORS</Heading>
        <Stack direction="row" spacing={8} justify="center" m={4}>
          <Flex align="center" justify="center">
            <Link href="https://hackclub.com" isExternal><Image w={24} h="auto" src="https://assets.hackclub.com/icon-rounded.png"/></Link>
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
