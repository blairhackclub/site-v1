import React from 'react';
import Head from 'next/head';
import config from '../../data/config';
import team from '../../data/team';
import NextLink from 'next/link'

import {
  Container,
  Heading,
  Link,
  Text,
	SimpleGrid,
	Box,
	useColorModeValue,
	Stack,
	Flex,
	Image,
	Button,
	Tag
} from '@chakra-ui/react';

export default function JoinTeam(){
  return (
  <>
    <Head>
    <title>Our Team{config.titleSuffix}</title>
    </Head>

    <Container maxW="container.xl" p={12} align="center">
			<Heading as="h1" size="2xl" my={2} color="brand.red">
				Our Team
			</Heading>
            <Heading as="h2" size="md" my={2} fontWeight="normal">
			</Heading>
    </Container>

		<Container maxW="container.lg">
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
				{team.map(person =>
					<Box align="center" p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg" key={person.name}>
						<Box minH={200} mb={2}>
                            <Box mt={2}>
								<Image h={250} borderRadius="50%" src={person.image}/>
							</Box>
							<Heading mt={5} as="h2" size="lg">{person.name}</Heading>
							<Text fontSize="lg" mt={2}>{person.description}</Text>
							<Link href={person.site} isExternal style={{ textDecoration: "none" }}>
                                <Button colorScheme="blue" mt={3}>Learn more</Button>
                            </Link>
						</Box>
					</Box>
				)}
			</SimpleGrid>
		</Container>

		<Container maxW="container.xl" p={12} pt={4} align="center">
        <Heading as="h2" size="xl" my={1}>
          <Text as="span" color="brand.red">Interested in joining?</Text>
        </Heading>
        <NextLink href="/team/join" style={{ textDecoration: "none" }}>
          <Button colorScheme="blue" mt={4} isExternal>Join our team</Button>
        </NextLink>
      </Container>
  </>
  );
}