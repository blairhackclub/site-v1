import React from 'react';
import socials from '../data/socials';

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

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center" justify="space-between" wrap="wrap"
      w="100%"
      bg="brand.red"
      color="white"
    >
      {/* Logo */}
      <Logo/>

      {/* Toggle */}
      <Toggle toggle={toggle} isOpen={isOpen}/>

      {/* Links */}
      <Box px={6}
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
          <MenuItem to="/schedule">SCHEDULE</MenuItem>
          <MenuItem to="/workshops">WORKSHOPS</MenuItem>
          <MenuItem to="/benefits">BENEFITS</MenuItem>
          <MenuItem to={socials.discord} type="button" isExternal>
            JOIN
          </MenuItem>
        </Stack>
      </Box>
    </Flex>
  )
}

function Logo() {
  return (
    <Box px={8}>
      <Link href="/">
        <Image h={16} src="/branding/flag-orpheus-top.png" alt="Blair Hack Club"/>
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

/*export default function NavbarComponent() {
  return (
    <Flex p={4} justify="center" bg="brand.red" color="white">
      <Stack direction="row">
        <Link href="/" _hover={{ color: "gray.300" }} style={{ fontDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold">HOME</Text>
        </Link>
      </Stack>
    </Flex>
  )
}*/
