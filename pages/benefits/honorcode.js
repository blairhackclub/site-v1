import React from 'react';
import Head from 'next/head';
import config from '../../data/config';

import {
  Container,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

export default function HonorCodePage() {
  return (
    <>
      <Head>
        <title>Benefits Honor Code{config.titleSuffix}</title>
        <meta property="og:title" content={`Benefits Honor Code${config.titleSuffix}`} key="ogtitle"/>
        <meta name="description" content="With great power comes great responsibility."/>
        <meta property="og:description" content="With great power comes great responsibility." key="ogdesc"/>
      </Head>

      <Container maxW="container.xl" p={12} align="center">
        <Heading as="h2" size="md" color="brand.muted">BENEFITS HONOR CODE</Heading>
        <Heading as="h1" size="2xl" mt={2} color="brand.red">
          With great power comes great responsibility.
        </Heading>
      </Container>

      <Container maxW="container.lg" px={12} pb={12} fontSize="lg">
        <Text my={4}>
          This is a system built on trust. 
          Every sticker shipment request is manually reviewed by someone on our team and at HQ and 
          every sticker shipment is personally prepared, packed, and mailed 
          - with the address hand written - 
          by <Link href="https://hackclub.slack.com/team/U018B5U27CH" color="brand.orange" isExternal>@melinda</Link> from 
          Greenbrae, California.
        </Text>
        <Text my={4}>
          We are relying on you to be a responsible user of it. 
          Stickers and other Hack Club perks are funded by donations to Hack Club and are not cheap 
          - every package costs real donor money.
        </Text>
        <Text my={4}>
          It's OK to request benefits for yourself, as a Hack Club member, because that is exactly what this is for.
          It's not OK, however, to abuse this system, such as requesting benefits that will not be used,
          excessively sending requests, or sharing these benefits with non-members.
        </Text>
        <Text my={4}>
          If we come to a conclusion that you are abusing these benefits, 
          you will be discharged from Blair Hack Club and will be banned from any club function or service.
        </Text>
      </Container>
    </>
  )
}
