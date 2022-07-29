import Head from 'next/head';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import SectionTitle from '@/root/components/sectionTitle';

const NFTs = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | NFTs</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <Heading
              as="h1"
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '14vw', sm: '70px' }}
            >
              <Text color="white" as="span" textTransform="uppercase" position="relative">
                Founder&nbsp;
              </Text>
              <Text
                position="relative"
                bottom={{ base: '0', md: '5px' }}
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
            <Text color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
              10.000 UNIQUE FOUNDER UNIWHALE NFTs.
            </Text>
            <Text color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
              POWERFUL FEATURES TO HELP YOU GAIN WEALTH.
            </Text>
            <br />
            <Text color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
              referral LINK TO EARN 5% (WHEN AN NFT IS MINTED USING YOUR LINK 5% OF ITS PRICE IS
              AUTOMATICALLY SENT TO YOUR DIGITAL WALLET).
            </Text>
            <br />
            <Text color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
              OWNERS OF NFTS ARE NO LONGER SIMPLE PARTICIPANTS, THEY PLAY AS FOUNDERS OF THE GAME.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h2"
              marginBottom="20px"
              fontWeight="900"
              color="gray.300"
              textTransform="uppercase"
              position="relative"
              lineHeight={{ base: '50px', md: '70px' }}
              fontSize={{ base: '45px', md: '60px' }}
            >
              Uniwhale NFTs powers
            </Heading>

            <SectionTitle text="Power of wealth" textColor="yellow.400" />
            <Box
              marginBottom="40px"
              textTransform="uppercase"
              color="white"
              fontSize={{ base: '15px', md: '20px' }}
              lineHeight="32px"
            >
              <Text color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
                60% OF THE AMOUNT RAISED ABOVE THE VALIDATION OF THE GAME IS DISTRIBUTED TO NFT
                OWNING PLAYERS IN A WEIGHTED MANNER BASED ON THE number OF TICKETS THEY PURCHASE FOR
                EACH GAME.
              </Text>
            </Box>

            <SectionTitle text="Power of creation" textColor="yellow.400" />
            <Box
              marginBottom="40px"
              textTransform="uppercase"
              color="white"
              fontSize={{ base: '15px', md: '20px' }}
              lineHeight="32px"
            >
              <Text color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
                THE POWER OF CREATION (AN NFT HOLDER CAN, UNDER CERTAIN CONDITIONS CREATE A NEW NFT,
                WHICH WILL HAVE ALL THE QUALITIES OF THE NFT FROM WHICH IT COMES). MORE INFO SOON...
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

NFTs.landingPage = true;

export default NFTs;
