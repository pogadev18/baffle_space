import Head from 'next/head';
import { Box, Container, Text, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import ImageCard from '@/root/components/imageCard';
import SectionTitle from '@/root/components/sectionTitle';
import AccumulationDrawing from '@/root/components/accumulationDrawing';

import styles from '@/root/styles/pages/gamePage.module.scss';
import Link from 'next/link';
import React from 'react';

const GamePage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Gameplay</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop={{ base: '25px', md: '60px' }}>
            <Heading
              as="h1"
              fontSize={{ base: '14vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom={{ base: '25px', md: '60px' }}
            >
              the <span style={{ color: '#ffc100' }}>Game</span>
              <span className={styles.titlePlayPart}>play</span>
            </Heading>
            <Box
              marginBottom="60px"
              marginRight="auto"
              marginLeft="auto"
              width={{ base: 'auto', md: '820px' }}
              textAlign="center"
              color="white"
            >
              <Text fontSize="18px">
                The following steps describe how Baffle Space Games (raffles) will play out.
              </Text>
            </Box>
            <SectionTitle text="Choose your dream prize" textColor="white" />

            <Text color="white" marginTop="20px" fontSize="18px">
              When players enter the Baffle Space Games dApp by connecting their MetaMask wallet,
              <br />
              the first thing to do will be to select the Dream Prize they want to play for.
            </Text>
          </Box>
          <Box marginY={{ base: '20px', sm: '60px' }} textAlign="center">
            <SimpleGrid columns={{ base: 1, xl: 3, lg: 2 }} spacing={10}>
              <ImageCard
                categoryTitle="dream electronics"
                url="whitepaper#gameplay"
                imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660306672/my-uploads/lqt6cowbsyrzfhnskqzn.jpg"
              />
              <ImageCard
                categoryTitle="dream cars"
                url="whitepaper#gameplay"
                imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660306665/my-uploads/pjmii2zzqgqkrldxpck1.jpg"
              />
              <ImageCard
                categoryTitle="dream bikes"
                url="whitepaper#gameplay"
                imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660308033/my-uploads/zfnprssjmojd9bn09gle.jpg"
              />
              <ImageCard
                categoryTitle="dream homes"
                url="whitepaper#gameplay"
                imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660306692/my-uploads/skshtzeko1iue6zpz9be.jpg"
              />
              <ImageCard
                categoryTitle="dream experiences"
                url="whitepaper#gameplay"
                imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660306686/my-uploads/c2rd53pee4naw8jyo3rx.jpg"
              />
              <ImageCard
                categoryTitle="golden dream"
                url="whitepaper#gameplay"
                imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660306678/my-uploads/jpp1uyjumwmoduckasth.jpg"
              />
            </SimpleGrid>
            <Text
              fontWeight="900"
              textAlign="center"
              color="black.700"
              fontSize="2xl"
              marginTop="50px"
            >
              <Link href="/whitepaper#gameplay">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.link}>
                  <strong> More Dream Prize Categories will be added soon</strong>
                </a>
              </Link>
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
              Blockchain technology ensures the fairness and transparency of Baffle Space Games.
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
              A timeframe will be set for each game in which players will be able to buy tickets for
              the Dream Prize they chose in the previous step. <br />
              <br />
              The first category of prizes players can play for will be Dream Electronics and it
              will have a 7 day accumulation period. Different Dream Prize Categories will have
              different timeframes. This step will determine the validation of the game, the reward
              amounts, the secondary draw prize pool and Baffle Space development and maintenance
              revenue.
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

            <Flex
              color="white"
              alignItems="center"
              justifyContent="space-between"
              width={{ base: 'auto', md: '600px' }}
              margin="auto"
              marginY="60px"
              gap="20px"
              direction={{ base: 'column', md: 'row' }}
            >
              <Box
                borderRadius="5px"
                lineHeight="46px"
                width="300px"
                background="#474747"
                padding="20px"
              >
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
              <Box
                borderRadius="5px"
                lineHeight="46px"
                width="300px"
                background="#474747"
                padding="20px"
              >
                <Text margin="0" fontSize="30px">
                  get your
                </Text>
                <Text fontWeight="900" fontSize="60px" margin="0">
                  DREAM
                </Text>
              </Box>
            </Flex>
            <Text
              fontWeight="900"
              textAlign="center"
              color="black.700"
              fontSize="2xl"
              marginY="50px"
            >
              <Link href="/whitepaper#gameplay">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.link}>Read More</a>
              </Link>
            </Text>
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
