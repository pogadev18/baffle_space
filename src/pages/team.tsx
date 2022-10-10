import Head from 'next/head';
import { Box, Container, Heading } from '@chakra-ui/react';

import CoreTeamMembers from '@/root/components/landingPage/coreTeamMembers';
import Link from 'next/link';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Team</title>
      </Head>

      <Box width="100%" background="#000">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop={{ base: '25px', md: '60px' }}>
            <Heading
              as="h1"
              fontSize={{ base: '14vw', sm: '70px' }}
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
            <Link href="/"> &larr; back to home</Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

TeamPage.landingPage = true;

export default TeamPage;
