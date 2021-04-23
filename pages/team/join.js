import React from 'react';
import Head from 'next/head';
import config from '../../data/config';
import officers from '../../data/officers';
import socials from '../../data/socials';

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
                <title>Join our Team{config.titleSuffix}</title>
            </Head>

            <Container maxW="container.xl" p={12} align="center">
                <Heading as="h1" size="2xl" my={2} color="brand.red">
                    Join our Team
                </Heading>
                <Heading as="h2" size="md" my={2} fontWeight="normal">
                    Come help us plan our club for the 2021 - 2022 school year.
                </Heading>
            </Container>

						<Container maxW="container.lg">
							<Heading textAlign = "center" as="h2" size="lg" my={2} fontWeight="normal">
									We're looking for help in the form of officers listed below,
							</Heading>
							<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} px={4}>
								<Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
									<Box minH={200} mb={2}>
										<Heading as="h2" size="lg">Outreach & Social Media Coordinator</Heading>
										<Text fontSize="lg" mt={2}>Handle relations with other clubs and organizations and manage our social media accounts.</Text>
										<Container align="center">
											<Image h={125}  src={officers.outreach.image}/>
										</Container>
									</Box>
									<Link href={socials.discord} style={{ textDecoration: "none" }}>
										<Button colorScheme="red" mt={3} color="white">Contact us on discord</Button>
									</Link>
								</Box>
								<Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
									<Box minH={200} mb={2}>
										<Heading as="h2" size="lg">Club Operations Manager</Heading>
										<Text fontSize="lg" mt={2}>
											Organize, write, and present presentations given to the club and manage the operations of running the club.
										</Text>
										<Container align="center">
											<Image h={125}  src={officers.operations.image}/>
										</Container>
									</Box>
									<Link href={socials.discord} style={{ textDecoration: "none" }}>
										<Button colorScheme="red" mt={5} color="white">Contact us on discord</Button>
									</Link>
								</Box>
								<Box p={8} bg={useColorModeValue("gray.50", "gray.900")} boxShadow="xs" borderRadius="lg">
									<Box minH={200} mb={2}>
										<Heading as="h2" size="lg">Software Engineer</Heading>
										<Text fontSize="lg" mt={2}>
											Help us code/design our website + other cool stuff!
										</Text>
										<Container mt={3} align="center">
											<Image h={125} src={officers.engineer.image}/>
										</Container>
									</Box>

									<Link href={socials.discord} style={{ textDecoration: "none" }}>
										<Button colorScheme="red" mt={3} color="white">Contact us on discord</Button>
									</Link>
								</Box>
							</SimpleGrid>
						</Container>
        </>
    );
}