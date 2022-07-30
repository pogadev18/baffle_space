import Head from 'next/head';
import { Box, Container, Text, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import ImageCard from '@/root/components/imageCard';
import SectionTitle from '@/root/components/sectionTitle';
import AccumulationDrawing from '@/root/components/accumulationDrawing';

import styles from '@/root/styles/pages/gamePage.module.scss';

const GamePage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Gameplay</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <Heading
              as="h1"
              fontSize={{ base: '14vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom="60px"
            >
              the <span style={{ color: '#ffc100' }}>Game</span>
              <span className={styles.titlePlayPart}>play</span>
            </Heading>
            <SectionTitle text="Choose your dream prize" textColor="white" />

            <Text color="white" marginTop="20px" fontSize="18px">
              When players enter the Baffle Space Games dApp by connecting their MetaMask wallet,
              <br />
              the first thing to do will be to select the Dream Prize they want to play for.
            </Text>
          </Box>
          <Box marginY={{ base: '20px', sm: '60px' }}>
            <SimpleGrid columns={{ base: 1, md: 3, sm: 2 }} spacing={10}>
              <ImageCard categoryTitle="electronics" url="game" />
              <ImageCard categoryTitle="cars" url="game" />
              <ImageCard categoryTitle="motors" url="game" />
              <ImageCard categoryTitle="home" url="game" />
              <ImageCard categoryTitle="baffle dream" url="game" />
              <ImageCard categoryTitle="gold dream" url="game" />
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
            <SectionTitle text="play the game" textColor="black" />
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
            <Text
              color="black"
              fontSize="18px"
              width={{ base: 'auto', md: '820px' }}
              margin="auto"
              textAlign="center"
            >
              A time-frame will be set for each game in which players will be able to buy tickets
              for the Dream Prize they chose in the previous step. The first category of prizes
              players can play for will have a 7 day accumulation period. Different prize categories
              will have different time frames. This step will determine the validation of the game,
              the reward amounts, the secondary draw prize pool and Baffle Space development and
              maintenance revenue.
            </Text>
            <AccumulationDrawing />
          </Box>
        </Container>
      </Box>
      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <SectionTitle text="win the game" textColor="white" />
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
            <Text
              color="white"
              fontSize="18px"
              width={{ base: 'auto', md: '820px' }}
              margin="auto"
              textAlign="center"
            >
              The next step of every game is The Main Draw. This is when the winning ticket of the
              Dream Prize gets drawn. After the accumulation period ends, the selection of the
              winning ticket is made by the blockchain algorithm.
            </Text>
            <Text
              textTransform="uppercase"
              fontWeight="900"
              color="yellow.400"
              fontSize="3xl"
              marginTop="30px"
              marginBottom="15px"
            >
              Claiming the win
            </Text>
            <Text
              color="white"
              fontSize="18px"
              width={{ base: 'auto', md: '820px' }}
              margin="auto"
              textAlign="center"
            >
              Baffle Space offers the owner of the winning ticket two options of claiming the Dream
              Prize. The winner will reach out to us on Telegram to confirm their win and choose how
              they wish to claim their prize.
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
              textAlign="center"
            >
              The Secondary Draw
            </Text>
            <Text
              color="white"
              fontSize="18px"
              width={{ base: 'auto', md: '820px' }}
              margin="auto"
              textAlign="center"
            >
              After the main draw, players are automatically enrolled with their non-winning tickets
              for the secondary draw where they have more chances to win. Three winning tickets will
              be drawn and will share the 20% prize pool determined in the accumulation phase.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box marginY="60px">
            <Text
              textAlign="center"
              textTransform="uppercase"
              fontWeight="900"
              color="yellow.400"
              fontSize="3xl"
              marginTop="30px"
              marginBottom="15px"
            >
              Last Chance Draw
            </Text>
            <Text
              color="white"
              fontSize="18px"
              width={{ base: 'auto', md: '820px' }}
              margin="auto"
              textAlign="center"
            >
              The remaining non-winning tickets will grant players yet another way to win the Baffle
              Space Games. This last draw of each raffle will bless players with chances (free
              tickets) and discounts for tickets in games with more valuable Dream Prizes than the
              current one.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

GamePage.landingPage = true;

export default GamePage;
