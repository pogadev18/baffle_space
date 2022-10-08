import { ReactNode } from 'react';

import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';
// import SimulateEarnings from '@/root/components/landingPage/simulateEarnings';
import NftTree from '@/root/components/nftTree';
import LogoTwitter from '@/root/components/logoTwitter';
import LogoTelegram from '@/root/components/logoTelegram';
import LogoTikTok from '@/root/components/logoTikTok';
import Less365DaysGraph from '@/root/components/less365DaysGraph';

import { genesisNFTBenefits, less365DaysTexts } from '@/root/utils/texts';

// import styles from './InfoTexts.module.scss';

const textColor = '#fff';
const titlesColor = '#00B0CA';
const borderBlue = '#0070A2';

const SubHeading = ({ children }: { children: ReactNode }) => (
  <Heading
    as="h2"
    fontSize={{ base: '8vw', sm: '34px' }}
    fontWeight="900"
    color={titlesColor}
    marginBottom="20px"
    textTransform="uppercase"
  >
    {children}
  </Heading>
);

const FollowUs = () => (
  <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap="10px" alignItems="center">
    <p>Follow us to learn more:</p>
    <Box display="flex" gap="10px">
      <LogoTwitter />
      <LogoTelegram />
      <LogoTikTok />
    </Box>
  </Box>
);

const InfoTexts = () => {
  return (
    <Container
      paddingY={{ base: '25px', md: '80px' }}
      paddingX={{ base: '25px', md: '40px' }}
      maxW="8xl"
    >
      <Box marginBottom="60px" textAlign="center">
        <SubHeading>What is it?</SubHeading>
        <Text color={textColor} fontSize="16px" margin="auto" width={{ base: 'auto', md: '540px' }}>
          Dogecoin was few robust delegated proof-of-stake! NEO detected the algo-traded
          all-time-low at the ICO since Bitcoin Cash identified lots of fork, therefore, Waves
          halving many minimum mainnet. IOTA is few provably orphan. Because it could be a hash,
          Litecoin thought the Lambo in a nonce.
        </Text>
      </Box>
      <Box
        borderTop={`1px solid ${borderBlue}`}
        borderBottom={`1px solid ${borderBlue}`}
        marginBottom="60px"
        display="flex"
        flexDirection={{ base: 'column', '2xl': 'row' }}
        justifyContent="space-between"
        paddingY="30px"
        paddingX={{ base: '25px', '2xl': '130px' }}
        alignItems="center"
      >
        <Box display={{ base: 'none', md: 'block' }}>
          <NftTree />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Image
            alt="Genesis NFTs"
            fit="cover"
            align="center"
            h="auto"
            w="auto"
            src="https://res.cloudinary.com/baffle-space/image/upload/v1665254282/my-uploads/nft_generations_xczpaw.png"
          />
        </Box>
        <Box marginTop={{ base: '50px', '2xl': '0px' }} color="#fff">
          <SubHeading>
            Build your own <br />
            earning system
          </SubHeading>
          <ul style={{ listStyle: 'disc', paddingLeft: '15px' }}>
            {genesisNFTBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <Box marginTop="20px">
            <FollowUs />
          </Box>
        </Box>
      </Box>
      <Box marginBottom="60px" textAlign="center">
        <SubHeading>Distributia fondurilor</SubHeading>
        <Box
          display="flex"
          borderBottom={`1px solid ${borderBlue}`}
          flexDirection={{ base: 'column', '2xl': 'row' }}
          justifyContent="space-between"
          paddingY="30px"
          paddingX={{ base: '25px', '2xl': '80px' }}
          gap="25px"
          alignItems="center"
        >
          <Box textAlign="left" color="#fff">
            <Heading
              as="h3"
              fontSize={{ base: '5vw', sm: '26px' }}
              fontWeight="400"
              color={titlesColor}
              marginBottom="20px"
              textTransform="uppercase"
            >
              Distribuția fondurilor din jocurile cu <br />
              durata mai mică de 365 de zile
            </Heading>
            <ol style={{ listStyle: 'decimal', paddingLeft: '15px' }}>
              {less365DaysTexts.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ol>
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Less365DaysGraph />
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <Image
              alt="Less365DaysGraph"
              fit="cover"
              align="center"
              h="auto"
              w="auto"
              src="https://res.cloudinary.com/baffle-space/image/upload/v1665255746/my-uploads/graph_w25vsx.png"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default InfoTexts;
