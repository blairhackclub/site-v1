import React from 'react';
import Head from 'next/head';
import config from '../../data/config';

import Header from '../../components/Header';

import {
  Box,
  Container,
  Button,
  Heading,
  Text,
  Code,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

export default function ReplitPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Figma Pro{config.titleSuffix}</title>
      </Head>

      <Header title="Figma Pro">
        <Heading as="h2" size="md" my={2} color="white" fontWeight="normal">
          Figma is a design software that is real-time collaborative, all-online, and free to get started with.
        </Heading>
      </Header>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">FIGMA</Heading>
        <Heading as="h1" size="2xl" my={2} color="green.500">
          Pro plan, free for students.
        </Heading>

        <Button mt={4} colorScheme="green" onClick={() => setModalOpen(true)}>Redeem your subscription</Button>
      </Container>

      <Container maxW="container.xl" p={12} pt={16}>
        <Heading as="h2" size="md" color="brand.muted">WHAT IT IS</Heading>
        <Heading as="h1" size="2xl" my={2}>
          <Link href="https://notion.so" color="green.500" isExternal>Figma</Link> is where teams design together.
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          Figma is a design software that is real-time collaborative, all-online, and free to get started with. 
          Hack Clubbers enjoy free Pro Plan while they are a student.
        </Text>
      </Container>

      <Box bg="green.500">
        <Container maxW="container.lg" p={12}>
          <Heading as="h1" size="2xl" my={2} color="white">
            Do more with <Text as="span" textDecoration="underline" style={{ whiteSpace: "pre" }}>Figma Pro</Text>.
          </Heading>
          <Text fontSize="xl" maxW="container.md" color="white">
            With Figma Pro, you'll have access to:
          </Text>
          <UnorderedList mt={2} pl={4} color="white">
            <ListItem>Unlimited projects</ListItem>
            <ListItem>Unlimited version history</ListItem>
            <ListItem>Custom file/user permissions</ListItem>
            <ListItem>Invite-only private projects</ListItem>
            <ListItem>Shareable team libraries</ListItem>
            <ListItem>Unlimited cloud storage</ListItem>
            <ListItem>Unlimited free viewers</ListItem>
          </UnorderedList>
        </Container>
      </Box>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalOverlay />   
        <ModalContent>
          <ModalHeader>
            Redeem Figma Pro
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Heading as="h2" size="md">How to redeem</Heading>
            <OrderedList mt={2} mb={6}>
              <ListItem>Head to <Link href="figma.com/education/apply">figma.com/education/apply</Link></ListItem>
              <ListItem>Click the Apply button</ListItem>
              <ListItem>For school name, enter <Code>Hack Club</Code></ListItem>
              <ListItem>For school website, enter <Code>hackclub.com</Code></ListItem>
              <ListItem>Have fun!!</ListItem>
            </OrderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
