import { Container, Stack, Box, Heading, Text } from '@chakra-ui/react';

import CTAs from '@/root/components/landingPage/hero/CTAs';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Box
      width="100%"
      backgroundImage={{ base: 'url(./mobile_hero.jpg)', md: 'url(./desktop_hero.jpg)' }}
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Container
        height={{ base: '500px', md: 'calc(100vh - 128px)' }}
        maxW="8xl"
        position="relative"
        paddingX={{ base: '25px', md: '40px' }}
      >
        <Stack
          align="center"
          spacing={{ base: 8, sm: 10 }}
          py={{ base: 10, md: 40 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack className={styles.heroInfo} display={{ base: 'none', md: 'block' }}>
            <Box marginBottom={10}>
              <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: '15vw', sm: '80px' }}>
                <Text color="white" as="span" textTransform="uppercase" position="relative">
                  Baffle
                </Text>
                <Text textTransform="uppercase" as="span" color="yellow.400" fontWeight="900">
                  S
                  <Text as="span" textTransform="uppercase" fontSize="40px" fontWeight="900">
                    pace
                  </Text>
                </Text>
                <br />
              </Heading>
              <Text color="white" fontWeight="900" fontSize="3xl" marginTop="0">
                Raffles for dreams and baffling wins!
              </Text>
              <Text
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
                marginTop="0"
                fontSize="20px"
              >
                Home of the play to win &amp; earn games
              </Text>
            </Box>
            <CTAs />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
