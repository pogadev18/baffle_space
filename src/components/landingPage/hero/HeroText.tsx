import { Box, Heading, Text } from '@chakra-ui/react';

/*
  <Box
    position="absolute"
   top="100px"
    left="25px"
    right="25px"
    background="rgba(0,0,0,0.8)"
    padding="15px"
  borderRadius="5px"
    marginY={5}
   display={{ md: 'none' }}
  >
    <Heading marginBottom="10px" lineHeight={1.1} fontWeight={700} fontSize="12vw">
    <Text color="white" as="span" textTransform="uppercase" position="relative">
      Baffle&nbsp;
     </Text>
     <Text textTransform="uppercase" as="span" color="yellow.400" fontWeight="900">
     S
      <Text as="span" textTransform="uppercase" fontSize="40px" fontWeight="900">
          pace
      </Text
     </Text>
      <br />
   </Heading>
    <Text color="white" fontWeight="900" fontSize="7vw" marginTop="0">
     Raffles for dreams and baffling wins!
    </Text>
  </Box>
 */

const HeroText = () => {
  return (
    <Box marginBottom={{ base: 0, md: 10 }}>
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
        display={{ base: 'none', md: 'block' }}
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        marginTop="0"
        fontSize="20px"
      >
        Home of the play to win &amp; earn games
      </Text>
    </Box>
  );
};

export default HeroText;
