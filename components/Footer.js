import React from 'react';
import socials from '../data/socials';
import NextLink from 'next/link';

import {
  Container,
  Stack,
  SimpleGrid,
  Text,
  Heading,
  Link,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import Icon from '@hackclub/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function FooterComponent() {
  return (
    <Container as="footer" 
      maxW="container.xl" px={{ base: 8, md: 16 }} py={{ base: 6, md: 12 }}
      color="brand.muted"
    >
      <Stack 
        direction={{ base: "column", md: "row" }} spacing={{ base: 12, md: 24, lg: 36 }}
        fontSize="lg"
      >
        {/* LINKS */}
        <Stack direction="row" spacing={{ base: 24, md: 24, lg: 36 }}>
          <Stack direction="column" spacing={3} flex={1} w={36}>
            <Heading mb={1} size="md" color={useColorModeValue("gray.500", "gray.400")}>
              Hack Club
            </Heading>
            <Link href={socials.discord} isExternal>Discord</Link>
            <NextLink href="/team" passHref><Link>Our Team</Link></NextLink>
            <NextLink href="/team/join" passHref><Link>Join Our Team</Link></NextLink>
            <Link href="https://hackclub.com/slack" isExternal>HQ Slack</Link>
          </Stack>

          <Stack direction="column" spacing={3} flex={1} w={36}>
            <Heading mb={1} size="md" color={useColorModeValue("gray.500", "gray.400")}>
              Resources
            </Heading>
            <Link href="https://hackclub.com/conduct" isExternal>Code of Conduct</Link>
            <Link href="https://hackclub.com/preface" isExternal>Preface</Link>
            <NextLink href="/workshops" passHref><Link>Workshops</Link></NextLink>
            <NextLink href="/benefits" passHref><Link>Benefits</Link></NextLink>
            <Link href="https://hackathons.hackclub.com" isExternal>Hackathons</Link>
            <Link href="https://events.hackclub.com" isExternal>Events</Link>
          </Stack>
        </Stack>

        {/* BRAND, CONNECTIONS, & CONTACT */}
        <Stack direction="column" spacing={3} w="auto">
          <Image h={12} w={32} src="/branding/flag-standalone.png"/>
          <SimpleGrid w={36} columns={{ base: 8, md: 4 }} py={2} spacingX={12} spacingY={2}>
            <Link href={socials.discord} p={1} isExternal>
              <FontAwesomeIcon icon={faDiscord} size="lg"/>
            </Link>
            <Link href={socials.github} isExternal>
              <Icon glyph="github" size={32} />
            </Link>
            <Link href={socials.youtube} isExternal>
              <Icon glyph="youtube" size={32} />
            </Link>
            <Link href={socials.instagram} isExternal>
              <Icon glyph="instagram" size={32} />
            </Link>
            <Link href={"mailto:"+socials.email}>
              <Icon glyph="email" size={32} />
            </Link>
          </SimpleGrid>

          <Stack direction="column" spacing={1}>
            <Heading mb={1} size="md" color={useColorModeValue("gray.500", "gray.400")}>
              Contact
            </Heading>
            <Text>blairhackclub@gmail.com</Text>
            <Text>
              Discord:<br/>
              linkai101#4245 (President)<br/>
              tinu#0935 (VP)
            </Text>
          </Stack>
        </Stack>
      </Stack>
      
      {/* COPYRIGHT */}
      <Text mt={6}>
        &copy; 2021 Blair Hack Club.
      </Text>
    </Container>
  )
}