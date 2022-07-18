import Head from 'next/head';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

const NFTs = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | NFTs</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: '10vw', sm: '40px' }}>
              <Text color="white" as="span" textTransform="uppercase" position="relative">
                Founder&nbsp;
              </Text>
              <Text
                position="relative"
                bottom={{ base: '0', md: '5px' }}
                fontSize={{ base: '13vw', sm: '60px' }}
                display={{ base: 'block', md: 'inline-block' }}
                fontWeight="900"
                textTransform="uppercase"
                as="span"
                color="yellow.400"
              >
                uniwhale&nbsp;
              </Text>
              <Text color="white" as="span" textTransform="uppercase" position="relative">
                NFTs
              </Text>
              <br />
            </Heading>
          </Box>
          <Box marginY="60px">
            <Flex gap={10} direction={{ base: 'column', sm: 'row' }}>
              <Box display={{ base: 'none', sm: 'block' }}>
                <Image
                  borderRadius="5px"
                  alt="Hero Image"
                  fit="cover"
                  align="center"
                  h="100%"
                  w="100%"
                  margin="auto"
                  src="/whaleBlur.png"
                />
              </Box>
              <Box display={{ base: 'none', sm: 'block' }}>
                <Image
                  borderRadius="5px"
                  alt="Hero Image"
                  fit="cover"
                  align="center"
                  h="100%"
                  w="100%"
                  margin="auto"
                  src="/whaleBlur2.png"
                />
              </Box>
              <Box>
                <Image
                  borderRadius="5px"
                  alt="Hero Image"
                  fit="cover"
                  align="center"
                  h="100%"
                  w="100%"
                  margin="auto"
                  src="/whaleBlur3.png"
                />
              </Box>
            </Flex>
          </Box>
          <Box
            marginBottom="60px"
            color="white"
            fontSize={{ base: '15px', md: '20px' }}
            textTransform="uppercase"
          >
            <Text>10.000 UNIQUE FOUNDER UNIWHALE NFTs.</Text>
            <Text>POWERFUL FEATURES TO HELP YOU GAIN WEALTH.</Text>
            <br />
            <Text>referral LINK TO EARN 5% (WHEN AN NFT IS MINTED USING YOUR LINK</Text>
            <Text>5% OF ITS PRICE IS AUTOMATICALLY SENT TO YOUR DIGITAL WALLET)</Text>
            <br />
            <Text>OWNERS OF NFTS ARE NO LONGER SIMPLE PARTICIPANTS, THEY PLAY</Text>
            <Text>AS FOUNDERS OF THE GAME.</Text>
          </Box>
          <Box>
            <Text
              marginBottom="20px"
              fontWeight="900"
              color="gray.300"
              textTransform="uppercase"
              position="relative"
              lineHeight={{ base: '50px', md: '70px' }}
              fontSize={{ base: '45px', md: '60px' }}
            >
              Uniwhale NFTs powers
            </Text>
            <Text
              fontWeight="900"
              color="yellow.400"
              textTransform="uppercase"
              position="relative"
              fontSize={{ base: '30px', md: '40px' }}
            >
              Power of wealth
            </Text>
            <Box
              marginBottom="40px"
              textTransform="uppercase"
              color="white"
              fontSize={{ base: '15px', md: '20px' }}
              lineHeight="32px"
            >
              <Text>60% OF THE AMOUNT RAISED ABOVE THE VALIDATION OF THE GAME IS</Text>
              <Text>DISTRIBUTED TO NFT OWNING PLAYERS IN A WEIGHTED MANNER BASED</Text>
              <Text>ON THE number OF TICKETS THEY PURCHASE FOR EACH GAME</Text>
            </Box>

            <Text
              fontWeight="900"
              color="yellow.400"
              textTransform="uppercase"
              position="relative"
              fontSize={{ base: '30px', md: '40px' }}
            >
              Power of creation
            </Text>
            <Box
              marginBottom="40px"
              textTransform="uppercase"
              color="white"
              fontSize={{ base: '15px', md: '20px' }}
              lineHeight="32px"
            >
              <Text>THE POWER OF CREATION (AN NFT HOLDER CAN, UNDER CERTAIN CONDITIONS</Text>
              <Text>CREATE A NEW NFT, WHICH WILL HAVE ALL THE QUALITIES OF THE NFT FROM</Text>
              <Text>WHICH IT COMES)</Text>
              <Text>MORE INFO SOON...</Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

NFTs.landingPage = true;

export default NFTs;
