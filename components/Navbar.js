import React from 'react';

import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Link,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import ColorModeToggle from './ColorModeToggle';
import socials from '../data/socials';

export default function NavbarComponent() {
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
        <Logo visibility="hidden"/>

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
            pt={[4, 4, 0, 0]}
          >
            <ColorModeToggle color={useColorModeValue("brand.red", "white")}/>
            <MenuItem to="https://www.notion.so/blairhackclub/Schedule-e5fc831bcaf942129bb6ea2621b0dfa0" isExternal>SCHEDULE</MenuItem>
            <MenuItem to="/workshops">WORKSHOPS</MenuItem>
            <MenuItem to={socials.discord} type="button" isExternal>JOIN</MenuItem>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}

function Logo({ ...rest }) {
  return (
    <Box px={8} {...rest}>
      <Link href="/">
        <Image h={16} src="/branding/flag-orpheus-top.png"/>
      </Link>
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
  const { children, to = "/", tooltip, type, ...rest } = props;

  // Button menu item
  if (type === 'button') {
    return (
      <Link href={to} style={{ textDecoration: "none" }} {...rest}>
        <Button size="sm" colorScheme="whiteAlpha" color="white">
          {children}
        </Button>
      </Link>
    );
  }
  
  return (
    <Link href={to} _hover={{ color: "gray.300" }} fontWeight="semibold" style={{ textDecoration: "none" }} {...rest}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  );
}