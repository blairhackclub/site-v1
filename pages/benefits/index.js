import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import config from '../../data/config';
import stickers from '../../data/stickers';

import {
  Box,
  Flex,
  Container,
  Stack,
  Heading,
  Text,
  Code,
  Tag,
  Button,
  Link,
  Image,
  SimpleGrid,
  OrderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
} from '@chakra-ui/react';

export default function BenefitsPage() {
  const [notionOpen, setNotionOpen] = React.useState(false);
  const [figmaOpen, setFigmaOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Benefits{config.titleSuffix}</title>
      </Head>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h1" size="2xl" my={2} color="brand.red">
          Benefits
        </Heading>
        <Heading as="h2" size="md" my={2} fontWeight="normal">
        Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.orange" isExternal>Hack Club</Link>, club members recieve FREE perks.
        </Heading>
        <Text mt={4}>
          By claiming benefits, you agree to the <Link href="/benefits/honorcode" fontWeight="bold" color="brand.red" isExternal>Benefits Honor Code</Link>.
        </Text>
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
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
            <NextLink href="/benefits/stickers" passHref>
              <Button bg={useColorModeValue("brand.red", "red.400")} color="white" mt={3}>Learn more</Button>
            </NextLink>
          </Box>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
              <Heading as="h2" size="lg">Repl.it</Heading>
              <Text fontSize="lg" mt={2}>
                An online IDE for coding in just about any language in your browser.
              </Text>
              <Text fontSize="lg" mt={3}>
                <Tag variant="solid" colorScheme="teal" fontWeight="bold" mr={2}>Benefits</Tag>
                Free 1 year subscription to Repl.it Hacker.
              </Text>
            </Box>
            <NextLink href="/benefits/replit" passHref>
              <Button bg={useColorModeValue("brand.red", "red.400")} color="white" mt={3}>Learn more</Button>
            </NextLink>
          </Box>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
              <Heading as="h2" size="lg">Notion</Heading>
              <Text fontSize="lg" mt={2}>
                A popular tool for planning projects, or even just to organize your lifestyle.
              </Text>
              <Text fontSize="lg" mt={3}>
                <Tag variant="solid" colorScheme="teal" fontWeight="bold" mr={2}>Benefits</Tag>
                Free Personal Pro plan in workspaces for students. 
              </Text>
            </Box>

            <Button bg={useColorModeValue("brand.red", "red.400")} color="white" mt={3} onClick={() => setNotionOpen(true)}>Redeem</Button>
          </Box>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
              <Heading as="h2" size="lg">Figma</Heading>
              <Text fontSize="lg" mt={2}>
                A design software that is real-time collaborative, all-online, and free to get started with.
              </Text>
              <Text fontSize="lg" mt={3}>
                <Tag variant="solid" colorScheme="teal" fontWeight="bold" mr={2}>Benefits</Tag>
                Free Figma Education plan for students.
              </Text>
            </Box>

            <Button bg={useColorModeValue("brand.red", "red.400")} color="white" mt={3} onClick={() => setFigmaOpen(true)}>Redeem</Button>
          </Box>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
              <Heading as="h2" size="lg" mt={2}>GitHub Student Developer Pack</Heading>
              <Text fontSize="lg" mt={2}>
                A free GitHub program that provides students with free access to CS tools and services as long as you are a student.
              </Text>
              <Text fontSize="lg" mt={3}>
                <Tag variant="solid" colorScheme="teal" fontWeight="bold" mr={2}>Benefits</Tag>
                Access and free subscriptions to hundreds of CS tools and services for students.
              </Text>
            </Box>
            <Link href="https://education.github.com/pack" style={{ textDecoration: "none" }} isExternal>
              <Button bg={useColorModeValue("brand.red", "red.400")} color="white" mt={3}>Learn more</Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">THANKS TO OUR SPONSORS</Heading>
        <Stack direction="row" spacing={8} justify="center" m={4}>
          <Flex align="center" justify="center">
            <Link href="https://hackclub.com" isExternal>
              <Image w={24} h="auto" src="/images/logos/hackclub.png" alt="Hack Club"/>
            </Link>
          </Flex>
          <Flex align="center" justify="center">
            <Link href="https://stickermule.com" isExternal>
              <Image w={36} h="auto" src="/images/logos/stickermule.svg" alt="Stickermule"/>
            </Link>
          </Flex>
          <Flex align="center" justify="center">
            <Link href="https://replit.com" isExternal>
              <Image w={36} h="auto" src="/images/logos/replit.png" alt="Replit"/>
            </Link>
          </Flex>
          <Flex align="center" justify="center">
            <Link href="https://notion.so" isExternal>
              <Image w={24} h="auto" src="/images/logos/notion.webp" alt="Notion"/>
            </Link>
          </Flex>
        </Stack>
      </Container>
      

      {/* NOTION */}
      <Modal isOpen={notionOpen} onClose={() => setNotionOpen(false)}>
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
        </ModalContent>
      </Modal>
      
      {/* FIGMA */}
      <Modal isOpen={figmaOpen} onClose={() => setFigmaOpen(false)}>
        <ModalOverlay />   
        <ModalContent>
          <ModalHeader>
            Redeem Figma Pro
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Heading as="h2" size="md">How to redeem</Heading>
            <OrderedList mt={2} mb={6}>
              <ListItem>Head to <Link href="https://figma.com/education/apply" isExternal>figma.com/education/apply</Link></ListItem>
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
