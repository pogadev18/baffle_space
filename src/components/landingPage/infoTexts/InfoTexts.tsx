import { Box, Container, Heading, Text } from '@chakra-ui/react';

const textColor = '#bababa';
const titlesColor = '#09ccdb';
const whiteColor = '#fff';

const moreInfoStyles = {
  color: textColor,
  textTransform: 'lowercase',
};

const InfoTexts = () => {
  return (
    <Container paddingX={{ base: '25px', md: '40px' }} maxW="8xl">
      <Box marginBottom="60px">
        <Heading
          as="h4"
          fontSize={{ base: '11vw', sm: '35px' }}
          fontWeight="900"
          color={titlesColor}
          marginBottom="20px"
          textTransform="uppercase"
        >
          What you win
        </Heading>
        <Text color={textColor} fontSize="18px" width={{ base: 'auto', md: '620px' }}>
          Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat
          smiling add but. Wonder twenty hunted and put
        </Text>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '11vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          7 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          luxury electronics
        </Heading>
        <Text
          fontSize={{ base: '11vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          hundreds of electronics
        </Text>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '11vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          30 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
          marginBottom="10px"
        >
          luxury cars - <span style={moreInfoStyles}>more than 200 models</span>
        </Heading>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
          marginBottom="10px"
        >
          luxury motors - <span style={moreInfoStyles}>more than 100 models</span>
        </Heading>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          gold - <span style={moreInfoStyles}>more than 10 kg</span>
        </Heading>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '11vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          90 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          luxury houses - <span style={moreInfoStyles}>hundreds of houses</span>
        </Heading>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '11vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          365 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
          marginBottom="10px"
        >
          new year lottery - <span style={moreInfoStyles}>from $1.000.000 guaranteed</span>
        </Heading>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '11vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          christmas lottery - <span style={moreInfoStyles}>from $1.000.000 guaranteed</span>
        </Heading>
      </Box>
      <Box marginBottom="60px">
        <Heading
          as="h4"
          fontSize={{ base: '11vw', sm: '35px' }}
          fontWeight="900"
          color={titlesColor}
          marginBottom="20px"
          textTransform="uppercase"
        >
          What you earn from referrals
        </Heading>
      </Box>
    </Container>
  );
};

export default InfoTexts;
