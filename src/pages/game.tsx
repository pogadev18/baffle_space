import Head from 'next/head';
import { Box, Container, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import ImageCard from '@/root/components/imageCard';
import SectionTitle from '@/root/components/sectionTitle';
import AccumulationDrawing from '@/root/components/accumulationDrawing';

const GamePage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Gameplay</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <SectionTitle
              firstPart="Choose"
              firstPartColor="white"
              secondPart="your dream"
              secondPartColor="yellow.400"
            />

            <Text color="white" marginTop="20px" fontSize="18px">
              Enter the game for your dream prize by purchasing chances with Matic.
            </Text>
          </Box>
          <Box marginY={{ base: '20px', sm: '60px' }}>
            <SimpleGrid columns={{ base: 1, md: 3, sm: 2 }} spacing={10}>
              <ImageCard categoryTitle="electronics" url="/game" />
              <ImageCard categoryTitle="cars" url="/game" />
              <ImageCard categoryTitle="motors" url="/game" />
              <ImageCard categoryTitle="home" url="/game" />
              <ImageCard categoryTitle="baffle dream" url="/game" />
              <ImageCard categoryTitle="gold dream" url="/game" />
            </SimpleGrid>
            <Text
              fontWeight="900"
              textAlign="center"
              textTransform="uppercase"
              color="black.700"
              fontSize="2xl"
              marginTop="50px"
            >
              More dreams will be added soon
            </Text>
          </Box>
        </Container>
      </Box>
      <Box width="100%" background="yellow.400">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <SectionTitle
              firstPart="play"
              firstPartColor="white"
              secondPart="the game"
              secondPartColor="black"
            />
            <Text color="black" marginTop="20px" fontSize="18px">
              More tickets mean more chances to win and more earnings.
            </Text>
            <Text color="black" fontSize="18px">
              Blockchain technology ensures the fairness and transparency of Baffle.Space games.
            </Text>
            <Text
              textTransform="uppercase"
              fontWeight="900"
              color="black"
              fontSize="3xl"
              marginTop="30px"
              marginBottom="15px"
            >
              Accumulation
            </Text>
            <Text color="black" fontSize="18px">
              All games have an accumulation period (raging between 7 and 90 days <br />
              based on Dream Categories). when players can purchase tickets to enter.
            </Text>
            <AccumulationDrawing />
          </Box>
        </Container>
      </Box>
      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <SectionTitle
              firstPart="win"
              firstPartColor="white"
              secondPart="the game"
              secondPartColor="yellow.400"
            />
            <Text
              textTransform="uppercase"
              fontWeight="900"
              color="yellow.400"
              fontSize="3xl"
              marginTop="30px"
              marginBottom="15px"
            >
              The main draw
            </Text>
            <Text color="white" fontSize="18px">
              One player will be drawn as the winner of the dream prize.
              <br /> The winner chooses their way of claiming.
            </Text>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width={{ base: 'auto', md: '500px' }}
              margin="auto"
              marginY="60px"
              direction={{ base: 'column', md: 'row' }}
            >
              <Box lineHeight="46px">
                <Text margin="0" fontSize="30px">
                  get your
                </Text>
                <Text fontWeight="900" fontSize="60px" margin="0">
                  WIN
                </Text>
              </Box>
              <Box>
                <Text fontSize="30px" fontWeight="700">
                  or
                </Text>
              </Box>
              <Box lineHeight="46px">
                <Text margin="0" fontSize="30px">
                  get your
                </Text>
                <Text fontWeight="900" fontSize="60px" margin="0">
                  DREAM
                </Text>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Box width="100%" background="black.800">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box marginY="60px">
            <Text
              textTransform="uppercase"
              fontWeight="900"
              color="yellow.400"
              fontSize="3xl"
              marginTop="30px"
              marginBottom="15px"
            >
              The Secondary game
            </Text>
            <Text color="white" fontSize="18px">
              One player will be drawn as the winner of the dream prize. The winner chooses their
              way of claiming.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box marginY="60px">
            <Text
              textTransform="uppercase"
              fontWeight="900"
              color="yellow.400"
              fontSize="3xl"
              marginTop="30px"
              marginBottom="15px"
            >
              micro games
            </Text>
            <Text color="white" fontSize="18px">
              One player will be drawn as the winner of the dream prize. The winner chooses their
              way of claiming.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

GamePage.landingPage = true;

export default GamePage;
