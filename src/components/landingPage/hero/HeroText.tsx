import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const HeroText = () => {
  return (
    <Box textAlign="center">
      <Heading
        lineHeight={1.4}
        fontWeight={900}
        color="white"
        fontSize={{ base: '11vw', lg: '28px' }}
        textTransform="uppercase"
        marginBottom={{ base: '10px', lg: 0 }}
      >
        Raffles for dreams and baffling wins!
      </Heading>
      <Text
        color="gray.500"
        width={{ base: 'auto', lg: '80%' }}
        textAlign="center"
        margin="auto"
        fontWeight="700"
        lineHeight={{ base: '35px', lg: 'auto' }}
        fontSize={{ base: '28px', lg: '22px' }}
        marginTop="0"
      >
        Home of the play to win &amp; earn games
      </Text>
      <Text
        margin="20px auto 0"
        color="white"
        fontSize="18px"
        width={{ base: 'auto', md: '500px' }}
      >
        Baffle Space hosts hybrid games of chance playable with crypto, where participants win real
        world prizes, crypto and can also earn as owners of the games.
        <br />
        <br />
        In a fully decentralised environment powered by blockchain technology we hold in high regard
        the privacy and security of participants in the Baffle Space Ecosystem so you can win and
        earn safely and anonymously.
      </Text>
    </Box>
  );
};

export default HeroText;
