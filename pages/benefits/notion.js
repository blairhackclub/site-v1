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
        <title>Notion Pro{config.titleSuffix}</title>
      </Head>

      <Header title="Notion Pro">
        <Heading as="h2" size="md" my={2} color="white" fontWeight="normal">
          Notion is a popular tool for shared documents, databases, task lists, and more.
        </Heading>
      </Header>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">NOTION</Heading>
        <Heading as="h1" size="2xl" my={2} color="brand.orange">
          Personal Pro Plan, free for students.
        </Heading>

        <Button mt={4} colorScheme="orange" onClick={() => setModalOpen(true)}>Redeem your subscription</Button>
      </Container>

      <Container maxW="container.xl" p={12} pt={16}>
        <Heading as="h2" size="md" color="brand.muted">WHAT IT IS</Heading>
        <Heading as="h1" size="2xl" my={2}>
          Write, plan, and get organized with <Link href="https://notion.so" color="brand.orange" isExternal>Notion</Link>.
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          Notion is a popular tool for shared documents, databases, task lists, and more. 
          It’s fantastic for keeping track of everything with your team. 
          Notion is giving every Hack Clubber their Personal Pro plan free for students, 
          which includes unlimited storage, unlimited uploads, version history going back 30 days, 
          and advanced permissions when you work with teammates!
        </Text>
      </Container>

      <Box bg="brand.orange">
        <Container maxW="container.lg" p={12}>
          <Heading as="h1" size="2xl" my={2} color="white">
            <Text as="span" textDecoration="underline" style={{ whiteSpace: "pre" }}>Notion Pro</Text> lets you do even more.
          </Heading>
          <Text fontSize="xl" maxW="container.md" color="white">
            With Notion Personal Pro, you'll have access to:
          </Text>
          <UnorderedList mt={2} pl={4} color="white">
            <ListItem>Unlimited file uploads</ListItem>
            <ListItem>Unlimited guests</ListItem>
            <ListItem>Version history</ListItem>
            <ListItem>Unlimited pages & blocks</ListItem>
            <ListItem>Sync across devices</ListItem>
            <ListItem>Content API</ListItem>
          </UnorderedList>
        </Container>
      </Box>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalOverlay />   
        <ModalContent>
          <ModalHeader>
            Redeem Notion Personal Pro
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Heading as="h2" size="md">To redeem your Notion subscription</Heading>
            <Text>(You must be using a desktop computer to do this)</Text>
            <OrderedList mt={2} mb={6}>
              <ListItem>If you haven’t made an account, go for it.</ListItem>
              <ListItem>In your left sidebar, go to <Code>Settings & Members</Code></ListItem>
              <ListItem>Next, click on <Code>Upgrade</Code> (or <Code>Plans</Code> if you're already on a plan)</ListItem>
              <ListItem>Scroll down to the <Code>Students & Educators</Code> section and click <Code>Get free Education plan</Code></ListItem>
              <ListItem>In the pop-up that appears, type promo code <Code>HACK</Code> and press Submit</ListItem>
              <ListItem>You’ll get automatic access to all the premium features! ✨</ListItem>
            </OrderedList>
            
            <Heading as="h2" size="md">Use Notion with your team</Heading>
            <OrderedList mt={2} mb={6}>
              <ListItem>Create a homepage for your team in your sidebar</ListItem>
              <ListItem>Add all other pages you want your team to access inside this homepage</ListItem>
              <ListItem>Click <Code>Share</Code> at the top right of your homepage, then <Code>Invite a Person</Code></ListItem>
              <ListItem>Add all your teammates with their email addresses and press <Code>Invite</Code></ListItem>
              <ListItem>They’ll all receive an email invite to the page so you can collaborate together!</ListItem>
            </OrderedList>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
