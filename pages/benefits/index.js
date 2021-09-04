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
  const [figmaOpen, setFigmaOpen] = React.useState(false);
  const [zoomOpen, setZoomOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Benefits{config.titleSuffix}</title>
        <meta property="og:title" content={`Benefits${config.titleSuffix}`} key="ogtitle"/>
        <meta name="description" content="Hack Clubbers recieve FREE perks, suck as stickers, Replit Hacker, and more!"/>
        <meta property="og:description" content="Hack Clubbers recieve FREE perks, suck as stickers, Replit Hacker, and more!" key="ogdesc"/>
      </Head>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h1" size="2xl" my={2} color="brand.red">
          Benefits
        </Heading>
        <Heading as="h2" size="md" my={2} fontWeight="normal">
        Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.orange" isExternal>Hack Club</Link>, club members recieve FREE perks.
        </Heading>
        <Text mt={4}>
          By claiming benefits, you agree to the <Link href="/benefits/honorcode" fontWeight="bold" color="brand.red">Benefits Honor Code</Link>.
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
              <Button bg={useColorModeValue("brand.red", "red.400")} colorScheme="red" color="white" mt={3}>Learn more</Button>
            </NextLink>
          </Box>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
              <Heading as="h2" size="lg">Replit</Heading>
              <Text fontSize="lg" mt={2}>
                An online IDE for coding in just about any language in your browser.
              </Text>
              <Text fontSize="lg" mt={3}>
                <Tag variant="solid" colorScheme="teal" fontWeight="bold" mr={2}>Benefits</Tag>
                Free 1 year subscription to Repl.it Hacker.
              </Text>
            </Box>
            <NextLink href="/benefits/replit" passHref>
              <Button bg={useColorModeValue("brand.red", "red.400")} colorScheme="red" color="white" mt={3}>Learn more</Button>
            </NextLink>
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

            <Button bg={useColorModeValue("brand.red", "red.400")} colorScheme="red" color="white" mt={3} onClick={() => setFigmaOpen(true)}>Redeem</Button>
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
              <Button bg={useColorModeValue("brand.red", "red.400")} colorScheme="red" color="white" mt={3}>Learn more</Button>
            </Link>
          </Box>
          <Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
            <Box minH={200} mb={2}>
              <Heading as="h2" size="lg" mt={2}>Zoom Pro</Heading>
              <Text fontSize="lg" mt={2}>
                you know what zoom is bruh
              </Text>
              <Text fontSize="lg" mt={3}>
                <Tag variant="solid" colorScheme="teal" fontWeight="bold" mr={2}>Benefits</Tag>
                Access to Zoom Pro meetings.
              </Text>
            </Box>
            <Button bg={useColorModeValue("brand.red", "red.400")} colorScheme="red" color="white" mt={3} onClick={() => setZoomOpen(true)}>Learn more</Button>
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
        </Stack>
      </Container>

      {/* FIGMA */}
      <Modal size="xl" isOpen={figmaOpen} onClose={() => setFigmaOpen(false)}>
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

      {/* ZOOM */}
      <Modal size="xl" isOpen={zoomOpen} onClose={() => setZoomOpen(false)}>
        <ModalOverlay />   
        <ModalContent>
          <ModalHeader>
            Hack Club Zoom Pro
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text>
              To start a Zoom Pro meeting, simply type <Code>/z</Code> anywhere in the <Link href="https://hackclub.com/slack" color="brand.red" isExternal>Hack Club Slack</Link>.
            </Text>
            <Image src="https://cloud-grl3n7i0e-hack-club-bot.vercel.app/0z-demo.gif" mt={2}/>

            <Heading as="h2" size="md" mt={4}>Google Calendar Integration</Heading>
            <Text>
              If you want to schedule meetings ahead of time (&amp; give people a Zoom link), we also built a Google Calendar integration. Here's how to install it:
            </Text>
            <OrderedList mt={2} mb={6}>
              <ListItem>Open <Link href="https://calendar.google.com" color="brand.red" isExternal>calendar.google.com</Link></ListItem>
              <ListItem>
                On the right, click the + button
                <Image src="https://cloud-il0b7j4pr-hack-club-bot.vercel.app/0screen_shot_2021-04-14_at_11.51.08_am.png"/>
              </ListItem>
              <ListItem>
                Search for <Code>/z</Code>
                <Image src="https://cloud-gjnywcsjd-hack-club-bot.vercel.app/0screen_shot_2021-04-14_at_11.59.03_am.png"/>
              </ListItem>
              <ListItem>
                Install the app
                <Image src="https://cloud-roeyr4i1n-hack-club-bot.vercel.app/0screen_shot_2021-04-14_at_11.59.54_am.png"/>
              </ListItem>
              <ListItem>
                Once it's installed, create a calendar event. Select <Code>Zoom Pro Meeting</Code> from the dropdown (if it doesn't appear, try refreshing—it will eventually appear).
                <Image src="https://cloud-roeyr4i1n-hack-club-bot.vercel.app/2screen_shot_2021-04-14_at_12.03.28_pm.png"/>
              </ListItem>
              <ListItem>
              You should see this "login required" thing. Click on <Code>Log in</Code>.
                <Image src="https://cloud-roeyr4i1n-hack-club-bot.vercel.app/3screen_shot_2021-04-14_at_12.03.38_pm.png"/>
              </ListItem>
              <ListItem>
                A Slack OAuth window should pop up. Follow the instructions to sign in with your Slack account.
                <Image src="https://cloud-roeyr4i1n-hack-club-bot.vercel.app/4screen_shot_2021-04-14_at_12.04.06_pm.png"/>
              </ListItem>
              <ListItem>
                Now it will work!
                <Image src="https://cloud-9zgxl6zn4-hack-club-bot.vercel.app/2screen_shot_2021-02-23_at_11.05.02_am.png"/>
              </ListItem>
            </OrderedList>

            <Text>/z is an unconventional yet effective solution by Hack Club to bring the benefits of Zoom Pro to more Hack Clubbers around the world.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
