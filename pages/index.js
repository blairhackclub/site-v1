import React from 'react';
import Head from 'next/head';
import config from '../data/config';
import faq from '../data/faq';

import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Button,
  Image,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import socials from '../data/socials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home{config.titleSuffix}</title>
        <meta property="og:title" content={`Home${config.titleSuffix}`} key="ogtitle"/>
        <meta name="description" content="A creative coding club at Montgomery Blair HS where you can learn, share, and hack."/>
        <meta property="og:description" content="A creative coding club at Montgomery Blair HS where you can learn, share, and hack." key="ogdesc"/>
      </Head>

      <Box bg={"brand.red"}>
        <Container maxW="container.lg" p={8} align="center">
          <Heading as="h1" size="2xl" mb={2} color="white">
            Blair Hack Club
          </Heading>
          <Heading as="h2" size="lg" my={2} color="white" fontWeight="normal">
            A creative coding club where you can learn, share, and hack.
          </Heading>

          <SimpleGrid p={4} mt={8}
            columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 12 }}
            bg="rgb(0,0,0,0.1)"
            borderRadius="xl"
          >
            <Box align="left" color="white">
              <Heading size="md">When &amp; where?</Heading>
              <Text>
                We meet every <b>Monday during lunch</b> at <b>Room 314</b>.
              </Text>
              <Text fontStyle="italic">
                Join our Discord to get weekly updates on meetings.
              </Text>
            </Box>

            <Box align="left" color="white">
              <Heading size="md">Apps, games, you name it.</Heading>
              <Text>We design and run workshops about a variety of tech topics such as web apps, mobile apps, games, machine learning, hardware, and more!</Text>
            </Box>

            <Box align="left" color="white">
              <Heading size="md">Beginners welcome!</Heading>
              <Text>Our engaging and beginner-friendly workshops will get you up and hacking in no time.</Text>
            </Box>
          </SimpleGrid>

          <Link href="https://bhc.page.link/discord" style={{ textDecoration: "none" }}>
            <Button mt={6}
              size="lg" 
              colorScheme="blackAlpha" bg="transparent"
              borderColor="white" borderWidth={2} borderRadius="xl"
              fontSize="xl" fontWeight="bold" color="white"
            >
              Join our Discord!
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxW="container.lg" py={3}>
        <AspectRatio ratio={16 / 9} mt={8}>
          <iframe
            width="560" height="315" 
            src="https://www.youtube-nocookie.com/embed/2lBfk9bmwyY" 
            title="Hack Club Promo Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullscreen
            style={{ borderRadius: "24px" }}
          />
        </AspectRatio>
      </Container>

      <Container maxW="container.xl" p={12}>
        <Heading as="h2" size="md" color="brand.muted">WHO WE ARE</Heading>
        <Heading as="h1" size="2xl" my={2}>
          We are a club for <Text as="span" color="brand.orange" style={{ whiteSpace: "pre" }}>creative coding</Text>.
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          Each week, we gather to do coding workshops, create awesome things, and share our creations.
          We also team up and participate in hackathons and coding events.
        </Text>
      </Container>

      <Container maxW="container.xl" px={12} py={6}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Image 
            src="/images/blair-emptyhall.png"
            fallbackSrc="https://via.placeholder.com/300"
            boxSize={{ base: "100%", md: "50%" }}
            borderRadius={24}
            userSelect="none"
          />
          <Box flex={1} pl={{ base: 0, md: 12 }} pt={{ base: 12, md: 0 }}>
            <Heading as="h2" size="md" color="brand.muted">WHY YOU SHOULD JOIN</Heading>
            <Stack direction="column" my={2} spacing={6}>
              <Box>
                <Heading as="h1" size="lg">
                  Anyone is welcome
                </Heading>
                <Text fontSize="xl">
                  Everyone and anyone is welcome! Our club caters to students of all backgrounds who have an
                  interest or passion in computer science.
                </Text>
              </Box>
              <Box>
                <Heading as="h1" size="lg">
                  You don't need to know how to code
                </Heading>
                <Text fontSize="xl">
                  We run workshops every week, where we will walk you through a cool project from a range of
                  topics including web design, database management, cybersecurity, game development, and more!
                </Text>
              </Box>
              <Box>
                <Heading as="h1" size="lg">
                  Code with others
                </Heading>
                <Text fontSize="xl">
                  Chill and hang out with us, and learn a few things along the way! Members can code and participate
                  in hackathons with their peers and showcase their amazing creations!
                </Text>
              </Box>
              <Box>
                <Heading as="h1" size="lg">
                  Free swag and benefits!
                </Heading>
                <Text fontSize="xl">
                  Thanks to <Link href="https://hackclub.com" fontWeight="bold" color="brand.orange" isExternal>Hack Club</Link>, 
                  club members receive FREE stickers, Replit Hacker, Figma Pro, and more!
                </Text>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>

      <Container maxW="container.xl" p={12}>
        <Heading as="h2" size="md" color="brand.muted">BEYOND CLUB MEETINGS</Heading>
        <Heading as="h1" size="2xl" my={2}>
          We participate in <Text as="span" color="brand.red" style={{ whiteSpace: "pre" }}>hackathons</Text>.
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          Members team up and participate in hackathons 
          like <Link href="https://blairhacks.com" fontWeight="bold" color="brand.cyan" isExternal>BlairHacks</Link> &amp; <Link href="https://mocohacks.org" fontWeight="bold" color="brand.cyan" isExternal>MoCoHacks</Link> and 
          compete in events like the <Link href="https://congressionalappchallenge.us" fontWeight="bold" color="brand.cyan" isExternal>Congressional App Challenge</Link>.
        </Text>
      </Container>
      
      <Box bg="brand.orange">
        <Container maxW="container.lg" p={12}>
          <Heading as="h1" size="2xl" my={2} color="white">
            #BlairHacks_5
          </Heading>
          <Heading as="h2" size="lg" my={2} color="white" fontWeight="normal">
            We are hosting BlairHacks_5 in 2022!
            BlairHacks is one of the <b>oldest</b> and one of the <b>largest</b> high-school hackathons in Maryland hosted annually at MBHS in Silver Spring.
          </Heading>
          <Link href="https://blairhacks.com" style={{ textDecoration: "none" }} isExternal>
            <Button bg="orange.300" color="white" _hover={{ bg:"orange.200" }}>Check it out!</Button>
          </Link>
        </Container>
      </Box>

      <Container maxW="container.md" p={12}>
        <Heading as="h2" size="md" color="brand.muted" align="center">FAQ</Heading>
        <Accordion mt={4} allowMultiple>
          {faq.map(item =>
            <AccordionItem key={item.question}>
              <Heading>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>
      </Container>
    </>
  );
}
