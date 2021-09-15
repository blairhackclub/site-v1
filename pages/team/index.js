import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link'

import config from '../../data/config';
import team from '../../data/team';

import {
  Container,
  Heading,
  Link,
  Text,
	SimpleGrid,
	Box,
	Stack,
	Image,
	Button,
	useColorModeValue,
} from '@chakra-ui/react';

export default function JoinTeam(){
  return (
  <>
    <Head>
    	<title>Our Team{config.titleSuffix}</title>
			<meta property="og:title" content={`Our Team${config.titleSuffix}`} key="ogtitle"/>
			<meta name="description" content="The leaders and officers that run the club."/>
			<meta property="og:description" content="The leaders and officers that run the club." key="ogdesc"/>
    </Head>

    <Container maxW="container.xl" p={12} align="center">
			<Heading as="h1" size="2xl" my={2} color="brand.red">
				Our Team
			</Heading>
    </Container>

		<Container maxW="container.md" mb={{ base: 2, md: 8 }}>
			<Stack direction={{ base: "column", md: "row" }} spacing={{ base: 2, md: 8 }} justify="center">
				{team.captains.map(member =>
					<Box 
						align="center" p={4} 
						key={member.name}
					>
						<Box>
							<Image w="100%" maxW="200px" borderRadius="50%" src={member.image} alt={member.name}/>
						</Box>
						<Link href={member.link} isExternal>
							<Heading as="h3" size="md" mt={5}>{member.name}</Heading>
						</Link>
						<Text fontSize="md" lineHeight={1.2}>{member.description}</Text>
					</Box>
				)}
			</Stack>
		</Container>

		<Container maxW="container.md" p={8}>
			<SimpleGrid style={{display: ['flex']}} alignContent="center" columns={{ base: 1, md: 3 }} spacing={{ base: 2, md: 8 }}>
				{team.officers.map(member =>
					<Box 
						align="center" p={4} 
						key={member.name}
						alignItems="center"
					>
						<Box align="center">
							<Image w="90%" maxW="200px" borderRadius="50%" src={member.image} alt={member.name}/>
						</Box>
						<Link href={member.link} isExternal>
							<Heading as="h3" size="md" mt={5}>{member.name}</Heading>
						</Link>
						<Text fontSize="md" lineHeight={1.2}>{member.description}</Text>
					</Box>
				)}
			</SimpleGrid>
		</Container>

		<Container maxW="container.xl" p={8} mt={12} align="center">
			<Heading as="h2" size="md" color="brand.muted">JOIN OUR TEAM</Heading>
			<Heading as="h1" size="xl" color="brand.red" my={2}>
				Interested in joining us?
			</Heading>
			
			<Text fontSize="xl">
				Apply for an officer position. Officers manage different aspects of the club.
			</Text>

			<NextLink href="/team/join" passHref>
				<Link style={{ textDecoration: "none" }}>
					<Button colorScheme="blue" mt={4} isExternal>Learn more</Button>
				</Link>
			</NextLink>
		</Container>
  </>
  );
}