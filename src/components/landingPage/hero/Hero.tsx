import { Container, Stack, Flex, Box, Heading, Text, Button, Image } from '@chakra-ui/react';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Box background="black.900" width="100%">
      <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
        <Stack
          align="center"
          spacing={{ base: 8, sm: 10 }}
          py={{ base: 10, md: 40 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack flex={1}>
            <Box marginBottom={10}>
              <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: '15vw', sm: '80px' }}>
                <Text color="gray.300" as="span" textTransform="uppercase" position="relative">
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
                color="gray.300"
                fontWeight="bold"
                textTransform="uppercase"
                marginTop="0"
                fontSize="20px"
              >
                Home of the play to win &amp; earn games
              </Text>
            </Box>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Button rounded="full" variant="solid" size="lg" px={6} colorScheme="yellow">
                NFTs
              </Button>
              <Button
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
                Gameplay
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} justify="center" align="center" position="relative">
            <Box
              position="relative"
              height={{ sm: '260px', md: '400px' }}
              width="full"
              overflow="hidden"
              className={styles.uniwhaleImg}
            >
              <Image
                alt="Hero Image"
                fit="cover"
                align="center"
                h={{ base: 'auto', md: '100%' }}
                w={{ base: '500px', md: '100%' }}
                margin="auto"
                src="/mascota.png"
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
