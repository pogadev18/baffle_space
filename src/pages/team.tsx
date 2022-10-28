import Head from 'next/head';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import CoreTeamMembers from '@/root/components/landingPage/coreTeamMembers';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Team</title>
      </Head>

      <Box width="100%" background="#000">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop={{ base: '25px', md: '100px' }}>
            <Heading
              as="h1"
              fontSize={{ base: '12vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom={{ base: '25px', md: '60px' }}
              color="#09ccdb"
            >
              Baffle Space team
            </Heading>
          </Box>
          <Box marginY={{ base: '20px', sm: '60px' }}>
            <CoreTeamMembers desktopNumberOfColumns={4} />
          </Box>
          <Box textAlign="center" color="#09ccdb" fontWeight="bold" marginBottom="30px">
            <Link href="/"> &larr; back home</Link>
          </Box>
        </Container>
        <Text
          display={{ base: 'block', md: 'none' }}
          position="fixed"
          bottom="0px"
          right="0px"
          padding="30px"
          fontSize={{ base: '30px', md: ' 40px' }}
          color="#00B0CA"
          fontWeight="700"
          textDecoration="underline"
        >
          <a href="#top">
            <BsFillArrowUpCircleFill />
          </a>
        </Text>
      </Box>
    </>
  );
};

TeamPage.landingPage = true;

export default TeamPage;
