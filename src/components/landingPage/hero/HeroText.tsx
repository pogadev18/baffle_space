import { Box, Heading, Text } from '@chakra-ui/react';

const HeroText = () => {
  return (
    <Box marginBottom={{ base: 0, lg: 10 }}>
      <Heading
        lineHeight={1.1}
        fontWeight={300}
        fontSize={{ base: '11vw', lg: '80px' }}
        marginBottom={{ base: '10px', lg: 0 }}
      >
        <Text color="white" as="span" textTransform="uppercase" position="relative">
          Baffle.
        </Text>
        <Text textTransform="uppercase" as="span" color="yellow.400" fontWeight="300">
          Space
        </Text>
        <br />
      </Heading>
      <Text
        color="white"
        width={{ base: 'auto', lg: '80%' }}
        textAlign="center"
        margin="auto"
        fontWeight="700"
        lineHeight={{ base: '35px', lg: 'auto' }}
        fontSize={{ base: '28px', lg: '25px' }}
        marginTop="0"
      >
        Raffles for dreams and baffling wins!
      </Text>
      <Text
        width={{ base: 'auto', lg: '80%' }}
        textAlign="center"
        margin="auto"
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        marginTop="10px"
        fontSize="16px"
      >
        Home of the play to win &amp; earn games
      </Text>
    </Box>
  );
};

export default HeroText;
