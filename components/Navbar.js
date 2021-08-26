import React from 'react';
import NextLink from 'next/link';

import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Link,
  Image,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import ColorModeToggle from './ColorModeToggle';
import socials from '../data/socials';

export default function NavbarComponent() {
  const { colorMode } = useColorMode();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Logo (fixed pos) */}
      <Logo position="fixed"/>

      <Flex as="nav"
        align="center" justify="space-between" wrap="wrap"
        zIndex={100}
        w="100%"
        color="white" bg="brand.red"
      >
        {/* Hidden Logo (takes up space for fixed pos logo) */}
        <Logo visibility="hidden" setIsOpen={setIsOpen}/>

        {/* Toggle */}
        <Toggle toggle={toggle} isOpen={isOpen}/>

        {/* Links */}
        <Box px={6} py={4}
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
          >

            <ColorModeToggle color={useColorModeValue("brand.red", "white")}/>
            {/* <MenuItem to="https://www.notion.so/blairhackclub/Schedule-e5fc831bcaf942129bb6ea2621b0dfa0" setIsOpen={setIsOpen} isExternal>SCHEDULE</MenuItem>
            <MenuItem to="/workshops" setIsOpen={setIsOpen}>WORKSHOPS</MenuItem> */}
            <MenuItem to="/team" setIsOpen={setIsOpen}>TEAM</MenuItem>
            <MenuItem to="/benefits" setIsOpen={setIsOpen}>BENEFITS</MenuItem>
            <MenuItem to={socials.discord} setIsOpen={setIsOpen} isExternal>DISCORD</MenuItem>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}

function Logo({ setIsOpen, ...rest }) {
  return (
    <Box zIndex={999} px={8} {...rest}>
      <NextLink href="/" passHref>
        <Link onClick={() => setIsOpen(false)}>
          <Image h={16} src="/branding/flag-orpheus-top.svg"/>
        </Link>
      </NextLink>
    </Box>
  );
}

function Toggle(props) {
  const { toggle, isOpen } = props;
  return (
    <Box 
      display={{ base: "block", md: "none" }} px={6}
      onClick={toggle}
    >
      {isOpen ? <CloseIcon/> : <HamburgerIcon w={5} h={5}/>}
    </Box>
  );
}

function MenuItem(props) {
  const { children, to = "/", tooltip, type, setIsOpen, ...rest } = props;

  // Button menu item
  if (type === 'button') {
    return (
        <NextLink href={to} passHref>
          <Link style={{ textDecoration: "none" }} onClick={() => setIsOpen(false)} {...rest}>
            <Button size="sm" colorScheme="whiteAlpha" color="white">
              {children}
            </Button>
          </Link>
        </NextLink>
    );
  }
  
  return (
    <NextLink href={to} passHref>
      <Link _hover={{ color: "gray.300" }} fontWeight="semibold" style={{ textDecoration: "none" }} onClick={() => setIsOpen(false)} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
}