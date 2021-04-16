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
        <title>Repl.it Hacker – Benefits{config.titleSuffix}</title>
      </Head>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted"><Link href="/benefits">BENEFITS</Link></Heading>
        <Heading as="h1" size="2xl" my={2} color="brand.blue">
          Repl.it Hacker
        </Heading>

        <Button mt={4} colorScheme="blue" onClick={() => setModalOpen(true)}>Request Repl.it Hacker</Button>
        <Benefits benefit="repl.it" open={modalOpen} setOpen={setModalOpen}/>
      </Container>

      <Container maxW="container.xl" p={12} pt={16}>
        <Heading as="h2" size="md" color="brand.muted">WHAT IT IS</Heading>
        <Heading as="h1" size="2xl" my={2}>
          We use <Link href="https://replit.com" color="brand.blue" isExternal>repl.it</Link> to code.
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          repl.it is an online IDE for coding in just about any language in your browser.
          We use repl.it because it is efficient, easy to use, and can be used anywhere.
          School computers currently block or don't come prepared with tools or support for some languages,
          and repl.it allows you to code in almost every language, anywhere, and on any device.
        </Text>
      </Container>

      <Box bg="brand.blue">
        <Container maxW="container.lg" p={12}>
        <Heading as="h1" size="2xl" my={2} color="white">
          <Text as="span" textDecoration="underline" style={{ whiteSpace: "pre" }}>Hacker Plan</Text> brings access to many helpful features.
        </Heading>
        <Text fontSize="xl" maxW="container.md" color="white">
          With repl.it Hacker Plan, you'll have access to:
        </Text>
        <UnorderedList mt={2} pl={4} color="white">
          <ListItem>Private repls</ListItem>
          <ListItem>Always on repls (your repls will always be running)</ListItem>
          <ListItem>5GB of storage</ListItem>
          <ListItem>2GB of memory</ListItem>
          <ListItem>2 vCPUs, 4x the speed</ListItem>
          <ListItem>Offline repls</ListItem>
        </UnorderedList>
        </Container>
      </Box>
    </>
  )
}
