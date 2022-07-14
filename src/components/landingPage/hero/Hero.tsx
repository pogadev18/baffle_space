import { Container, Stack, Flex, Box, Heading, Text, Button, Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box background="black.900" width="100%">
      <Container maxW="8xl">
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1}>
            <Box marginBottom={10}>
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: '3xl', sm: '4xl', lg: '80px' }}
              >
                <Text color="gray.300" as="span" textTransform="uppercase" position="relative">
                  Baffle
                </Text>
                <Text textTransform="uppercase" as="span" color="yellow.400">
                  S
                  <Text as="span" textTransform="uppercase" fontSize="40px">
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
              <Button
                rounded="full"
                size="lg"
                fontWeight="normal"
                px={6}
                colorScheme="red"
                bg="red.400"
                _hover={{ bg: 'red.500' }}
              >
                Get started
              </Button>
              <Button rounded="full" size="lg" fontWeight="normal" px={6}>
                How It Works
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} justify="center" align="center" position="relative" w="full">
            <Box position="relative" height="400px" width="full" overflow="hidden">
              <Image
                alt="Hero Image"
                fit="cover"
                align="center"
                w="100%"
                h="100%"
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
