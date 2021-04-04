import React from 'react';

import {
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';

export default function HeaderComponent(props) {
  const { title, children } = props;

  return (
    <>
      <Box bg="brand.red">
        <Container maxW="container.lg" p={8} align="center">
          <Heading as="h1" size="xl" my={2} color="white">
            {title}
          </Heading>
          {children}
        </Container>
      </Box>
    </>
  )
}