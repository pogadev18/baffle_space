import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SimulateEarnings from '@/root/components/landingPage/simulateEarnings';
import Link from 'next/link';

import styles from './InfoTexts.module.scss';

const textColor = '#bababa';
const titlesColor = '#09ccdb';
const whiteColor = '#fff';

const buildBenefitsTexts = [
  'BUY YOUR GENESIS NFT TO UNLOCK THE POWER OF WEALTH',
  'generate your own NFTs collection',
  'GENERATE YOUR REFERRAL LINK',
  'MORE CHANCES YOU SELL MORE MONEY YOU MAKE',
];

const InfoTexts = () => {
  return (
    <Container paddingX={{ base: '25px', md: '40px' }} maxW="8xl">
      <Box marginBottom="60px">
        <Heading
          as="h4"
          fontSize={{ base: '8vw', sm: '35px' }}
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
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          7 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          luxury electronics
        </Heading>
        <Text
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          hundreds of electronics
        </Text>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          30 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
          marginBottom="10px"
        >
          luxury cars - <span className={styles.moreInfoText}>more than 200 models</span>
        </Heading>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
          marginBottom="10px"
        >
          luxury motors - <span className={styles.moreInfoText}>more than 100 models</span>
        </Heading>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          gold - <span className={styles.moreInfoText}>more than 10 kg</span>
        </Heading>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          90 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          luxury houses - <span className={styles.moreInfoText}>hundreds of houses</span>
        </Heading>
      </Box>
      <Box marginBottom="60px">
        <Text
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color={textColor}
          marginBottom="0px"
        >
          365 days interval
        </Text>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
          marginBottom="10px"
        >
          new year lottery - <span className={styles.moreInfoText}>from $1.000.000 guaranteed</span>
        </Heading>
        <Heading
          textTransform="uppercase"
          as="h3"
          fontSize={{ base: '7vw', sm: '40px' }}
          fontWeight="900"
          color={whiteColor}
        >
          christmas lottery -{' '}
          <span className={styles.moreInfoText}>from $1.000.000 guaranteed</span>
        </Heading>
      </Box>
      <Box marginBottom="60px">
        <Heading
          as="h4"
          fontSize={{ base: '8vw', sm: '35px' }}
          fontWeight="900"
          color={titlesColor}
          textTransform="uppercase"
        >
          What you earn from referrals
        </Heading>
        <Box
          marginTop="50px"
          width={{ base: 'auto', sm: '800px' }}
          borderRadius="15px"
          backgroundColor="black.500"
          padding={{ base: '15px', sm: '50px' }}
        >
          <SimulateEarnings />
        </Box>
      </Box>
      <Box marginBottom="60px">
        <Heading
          as="h4"
          fontSize={{ base: '8vw', sm: '35px' }}
          fontWeight="900"
          color={titlesColor}
          marginBottom="20px"
          textTransform="uppercase"
        >
          Build your own earning system
        </Heading>
        {buildBenefitsTexts.map((text) => (
          <Text
            key={text}
            color={textColor}
            textTransform="uppercase"
            fontSize="18px"
            fontWeight="bold"
            width={{ base: 'auto', md: '620px' }}
          >
            - {text}
          </Text>
        ))}
      </Box>
      <Box marginBottom="60px" className={styles.socialMediaLinks}>
        <Text
          color={textColor}
          textTransform="uppercase"
          fontSize="18px"
          width={{ base: 'auto', md: '620px' }}
        >
          follow us on <Link href="/">twitter</Link>, <Link href="/">tiktok</Link>,{' '}
          <Link href="/">telegram</Link> to find out more!
        </Text>
        <br />
        <Text
          color={textColor}
          textTransform="uppercase"
          fontSize="18px"
          width={{ base: 'auto', md: '620px' }}
        >
          Also, check out our <Link href="/team">TEAM</Link>.
        </Text>
      </Box>
    </Container>
  );
};

export default InfoTexts;
