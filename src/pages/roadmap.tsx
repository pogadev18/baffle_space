import Head from 'next/head';
import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Road from '@/root/components/landingPage/road';
import MobileRoad from '@/root/components/landingPage/mobileRoad';

const RoadmapPage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Roadmap</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <Heading
              as="h1"
              color="white"
              fontSize={{ base: '14vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom="60px"
            >
              Roadmap
            </Heading>
          </Box>
          <Box textAlign="center" marginTop="40px">
            <MobileRoad />
            <Road />
          </Box>
        </Container>
      </Box>
    </>
  );
};

RoadmapPage.landingPage = true;

export default RoadmapPage;
