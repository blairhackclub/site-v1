import React from 'react';
import Head from 'next/head';
import config from '../../data/config';
import stickers from '../../data/stickers';

import Benefits from '../../components/Benefits';

import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Button,
  Link,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';

export default function StickersPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Stickers – Benefits{config.titleSuffix}</title>
        <meta property="og:title" content={`Stickers – Benefits${config.titleSuffix}`} key="ogtitle"/>
        <meta name="description" content="Get free exclusive Hack Club stickers mailed straight to your door!"/>
        <meta property="og:description" content="Get free exclusive Hack Club stickers mailed straight to your door!" key="ogdesc"/>
      </Head>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted"><Link href="/benefits">BENEFITS</Link></Heading>
        <Heading as="h1" size="2xl" my={2} color="brand.purple">
          Stickers
        </Heading>

        <Button mt={4} colorScheme="purple" onClick={() => setModalOpen(true)}>Request Stickers</Button>
        <Benefits benefit="stickers" open={modalOpen} setOpen={setModalOpen}/>
      </Container>

      <Container maxW="container.md">
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8} py={8} px={4}>
          {stickers.map(sticker =>
            <Box key={sticker.label}> 
              <Flex key={sticker.label} minH={36} justify="center" align="center">
                <Image w={36} src={sticker.image}/>
              </Flex>
              <Text mt={4} fontSize="xl" fontWeight="semibold" color="brand.muted" align="center">{sticker.label}</Text>
            </Box>
          )}
        </SimpleGrid>
      </Container>
    </>
  )
}
