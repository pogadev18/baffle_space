import Head from 'next/head';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Road from '@/root/components/landingPage/road';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const RoadmapPage = ({ isOnWhitepaperPage }: { isOnWhitepaperPage: boolean }) => {
  return (
    <>
      <Head>
        <title>Baffle.space | Roadmap</title>
      </Head>

      <Box width="100%" background="#000">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop={{ base: '25px', md: '100px' }}>
            {!isOnWhitepaperPage && (
              <Heading
                as="h1"
                color="#09ccdb"
                fontSize={{ base: '12vw', sm: '70px' }}
                textTransform="uppercase"
                fontWeight="900"
                marginBottom={{ base: '25px', md: '60px' }}
              >
                Roadmap
              </Heading>
            )}
          </Box>
          <Box textAlign="center" marginTop="40px">
            <Road />
          </Box>
        </Container>
        <Text
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

RoadmapPage.landingPage = true;

export default RoadmapPage;
