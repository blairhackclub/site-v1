import React from 'react';
import socials from '../data/socials';

import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Link,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

import ColorModeToggle from './ColorModeToggle';

import Icon from '@hackclub/icons';

export default function FooterComponent() {
  return (
    <Box as="footer">
      {/* Links */}
      <Flex p={8}
        justify="center"
        bg={useColorModeValue("gray.200", "gray.500")}
      >
        <Stack spacing={12} direction={{ base: "column", md: "row" }} justify="center">
          <Stack spacing={2}>
            <Link href={socials.discord} isExternal>Discord</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/officer">Apply for Officer</Link>
            <Heading size="xs" color={useColorModeValue("gray.500", "gray.300")} fontWeight="bold">Resources</Heading>
            <Link href="/workshops">Workshops</Link>
            <Link href="/benefits">Benefits</Link>
          </Stack>
          <Stack spacing={2}>
            <Heading size="xs" color={useColorModeValue("gray.500", "gray.300")} fontWeight="bold">Email</Heading>
            <Link href="mailto:blairhackclub@gmail.com">{socials.email}</Link>
            <Heading size="xs" color={useColorModeValue("gray.500", "gray.300")} fontWeight="bold">Discord</Heading>
            <Link href={socials.discord} isExternal>Blair HC Server</Link>
            <Text>linkai101#4245 (President)<br/>tinu#0935 (VP)</Text>
            <Heading size="xs" color={useColorModeValue("gray.500", "gray.300")} fontWeight="bold">Instagram</Heading>
            <Link href={socials.instagram} isExternal>@blairhackclub</Link>
          </Stack>
          <Stack spacing={2}>
            <Heading size="xs" color={useColorModeValue("gray.500", "gray.300")} fontWeight="bold">HQ</Heading>
            <Link href="https://hackclub.com/conduct" isExternal>Code of Conduct</Link>
            <Link href="https://hackclub.com/preface" isExternal>Preface</Link>
            <Link href="https://hackclub.com" isExternal>Hack Club HQ</Link>
          </Stack>
        </Stack>
      </Flex>

      {/* Lower footer */}
      <Flex p={4}
        justify="space-between" direction={{ base: "column", md: "row" }}
        bg="brand.red" color="white"
      >
        <Flex align="center" direction={{ base: "column", md: "row" }}>
          <Text m={2} color="white">&copy; 2021 Blair Hack Club.</Text>
        </Flex>
        <Stack m={2} spacing={4} direction="row" justify="center" align="center">
          <ColorModeToggle color={useColorModeValue("brand.red", "white")}/>
          <Tooltip label="Email">
            <Link href={"mailto:"+socials.email}>
              <Icon glyph="email" size={32} />
            </Link>
          </Tooltip>
          <Tooltip label="Discord">
            <Link href={socials.discord} isExternal>
              <Icon glyph="message" size={32} />
            </Link>
          </Tooltip>
          <Tooltip label="Instagram">
            <Link href={socials.instagram} isExternal>
              <Icon glyph="instagram" size={32} />
            </Link>
          </Tooltip>
        </Stack>
      </Flex>
    </Box>
  )
}