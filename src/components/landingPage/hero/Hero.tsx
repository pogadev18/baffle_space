import { Container, Stack, Box, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import styles from './Hero.module.scss';

const Hero = () => {
  const router = useRouter();

  return (
    <Box
      width="100%"
      // backgroundImage={{ base: 'url(./mobil_hero.jpeg)', md: 'url(./desktop_hero.jpg)' }}
      backgroundImage="url(./desktop_hero.jpg)"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Container
        height={{ base: '500px', md: 'auto' }}
        maxW="8xl"
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
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'column' }}>
              <Button
                onClick={() => router.push('/nfts')}
                rounded="full"
                variant="solid"
                size="lg"
                px={6}
                width={{ base: 'auto', md: '100%' }}
                colorScheme="yellow"
              >
                NFTs
              </Button>
              <Button
                onClick={() => router.push('/game')}
                width={{ base: 'auto', md: '100%' }}
                variant="outline"
                color="white"
                rounded="full"
                size="lg"
                fontWeight="normal"
                borderWidth="3px"
                borderColor="black.800"
                px={6}
                _hover={{
                  textDecoration: 'none',
                  bg: 'yellow.400',
                  color: 'black.900',
                }}
              >
                The Gameplay
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
