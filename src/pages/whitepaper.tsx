import Head from 'next/head';
import { Box, Heading, Container } from '@chakra-ui/react';

import WhitepaperSections from '@/root/components/landingPage/whitepaperSections';

const WhitepaperPage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Whitepaper</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop={{ base: '25px', md: '60px' }}>
            <Heading
              as="h1"
              fontSize={{ base: '13vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              color="white"
              marginBottom={{ base: '25px', md: '60px' }}
            >
              Whitepaper
            </Heading>
            <Box
              textAlign={{ base: 'center', lg: 'right' }}
              fontWeight="bold"
              position="relative"
              bottom={{ base: '20px', sm: '40px', lg: '0' }}
              color="gray.500"
              fontSize="18px"
            >
              Latest update: August 2022
            </Box>
          </Box>
          <WhitepaperSections />
        </Container>
      </Box>
    </>
  );
};

WhitepaperPage.landingPage = true;

export default WhitepaperPage;
