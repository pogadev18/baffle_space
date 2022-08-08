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
          <Box textAlign="center" marginTop="60px">
            <Heading
              as="h1"
              fontSize={{ base: '13vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              color="white"
              marginBottom="60px"
            >
              Whitepaper
            </Heading>
          </Box>
          <WhitepaperSections />
        </Container>
      </Box>
    </>
  );
};

WhitepaperPage.landingPage = true;

export default WhitepaperPage;
