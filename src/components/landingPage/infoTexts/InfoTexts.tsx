import { ReactNode, Fragment } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

import NftTree from '@/root/components/nftTree';
import LogoTwitter from '@/root/components/logoTwitter';
import LogoTelegram from '@/root/components/logoTelegram';
import LogoTikTok from '@/root/components/logoTikTok';
import Less365DaysGraph from '@/root/components/less365DaysGraph';
import Exact365DaysGraph from '@/root/components/exact365DaysGraph';
import SimulateEarnings from '@/root/components/landingPage/simulateEarnings';

import {
  genesisNFTBenefits,
  less365DaysTexts,
  exact365DaysTexts,
  whatYouWinTexts,
  winCategories,
} from '@/root/utils/texts';

import styles from './InfoTexts.module.scss';

const textColor = '#fff';
const titlesColor = '#00B0CA';
const borderBlue = '#0070A2';
const intervalColor = '#707070';

export const SubHeading = ({ children }: { children: ReactNode }) => (
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

export const SoftHeading = ({
  children,
  marginBottom,
}: {
  children: ReactNode;
  marginBottom: string;
}) => (
  <Heading
    as="h3"
    fontSize={{ base: '5vw', sm: '26px' }}
    fontWeight="400"
    color={titlesColor}
    marginBottom={marginBottom}
    textTransform="uppercase"
  >
    {children}
  </Heading>
);

export const FollowUs = ({ alignX }: { alignX: string }) => (
  <Box
    display="flex"
    flexDirection={{ base: 'column', md: 'row' }}
    gap="10px"
    justifyContent={alignX}
    alignItems="center"
  >
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
      paddingY={{ base: '15px', md: '80px' }}
      paddingX={{ base: '15px', md: '40px' }}
      maxW="8xl"
    >
      <Box marginBottom="60px" textAlign="center">
        <SubHeading>Why baffle space</SubHeading>
        <Text color={textColor} fontSize="16px" margin="auto" width={{ base: 'auto', md: '540px' }}>
          Dogecoin was few robust delegated proof-of-stake! NEO detected the algo-traded
          all-time-low at the ICO since Bitcoin Cash identified lots of fork, therefore, Waves
          halving many minimum mainnet. IOTA is few provably orphan. Because it could be a hash,
          Litecoin thought the Lambo in a nonce.
        </Text>
      </Box>

      <Box
        borderTop={`1px solid ${borderBlue}`}
        marginBottom={{ base: '20px', md: '30px' }}
        display="flex"
        flexDirection={{ base: 'column', xl: 'row' }}
        justifyContent="space-between"
        paddingY={{ base: '30px', md: '30px' }}
        paddingX={{ base: '15px', '2xl': '130px' }}
        alignItems="center"
        gap={{ base: '10px', xl: '60px' }}
      >
        <Box
          width={{ base: '100%', xl: '50%' }}
          marginTop={{ base: '0px', '2xl': '0px' }}
          color="#fff"
        >
          <SubHeading>What you win</SubHeading>
          <ul style={{ listStyle: 'disc', paddingLeft: '15px' }}>
            {whatYouWinTexts.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </Box>

        <Box width={{ base: '100%', xl: '50%' }}>
          <Box className={styles.winCategoriesPrizes}>
            {winCategories.map((category) => {
              const { dayInterval, info } = category;

              return (
                <Fragment key={dayInterval}>
                  <Text
                    className={styles.dayInterval}
                    borderBottom={`1px solid ${intervalColor}`}
                    textTransform="uppercase"
                    fontSize="14px"
                    color={intervalColor}
                  >
                    {dayInterval}
                  </Text>
                  {info.map((text) => (
                    <Box className={styles.winDescription} key={text.subtitle}>
                      <SoftHeading marginBottom="0px">{text.title}</SoftHeading>
                      <Text fontSize="14px" color="#fff">
                        {text.subtitle}
                      </Text>
                    </Box>
                  ))}
                </Fragment>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box
        borderTop={`1px solid ${borderBlue}`}
        borderBottom={`1px solid ${borderBlue}`}
        marginBottom={{ base: '20px', md: '60px' }}
        display="flex"
        flexDirection={{ base: 'column', '2xl': 'row' }}
        justifyContent="space-between"
        paddingY={{ base: '30px', md: '60px' }}
        paddingX={{ base: '15px', '2xl': '130px' }}
        alignItems="center"
      >
        <NftTree />

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
            <FollowUs alignX="flextStart" />
          </Box>
        </Box>
      </Box>

      <Box
        borderBottom={`1px solid ${borderBlue}`}
        marginBottom={{ base: '20px', md: '60px' }}
        paddingBottom="30px"
        paddingX={{ base: '15px', '2xl': '80px' }}
      >
        <Box textAlign="center">
          <SubHeading>
            What you earn from <br />
            referrals
          </SubHeading>
          <Text
            color={textColor}
            fontSize="16px"
            margin="auto"
            width={{ base: 'auto', md: '540px' }}
          >
            Algoritmul nostru împarte 60% din câștigul pe fiecare joc între deținătorii de NFTs.
          </Text>
          <Box color="#fff" marginY="40px">
            <FollowUs alignX="center" />
          </Box>
        </Box>

        <Box marginTop={{ base: '0px', '2xl': '0px' }} color="#fff">
          <SimulateEarnings />
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
          paddingX={{ base: '15px', '2xl': '80px' }}
          gap="25px"
          alignItems="center"
        >
          <Box textAlign="left" color="#fff">
            <SoftHeading marginBottom="20px">
              Distribuția fondurilor din jocurile cu <br />
              durata mai mică de 365 de zile
            </SoftHeading>
            <ol style={{ listStyle: 'decimal', paddingLeft: '15px' }}>
              {less365DaysTexts.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ol>
          </Box>
          <Less365DaysGraph />
        </Box>
      </Box>
      <Box marginBottom="60px" textAlign="center">
        <Box
          display="flex"
          flexDirection={{ base: 'column', '2xl': 'row' }}
          justifyContent="space-between"
          paddingX={{ base: '15px', '2xl': '80px' }}
          gap="25px"
          alignItems="center"
        >
          <Box textAlign="left" color="#fff">
            <SoftHeading marginBottom="20px">
              Distribuția fondurilor din jocurile cu <br /> durata de 365 de zile
            </SoftHeading>
            <ol style={{ listStyle: 'decimal', paddingLeft: '15px' }}>
              {exact365DaysTexts.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ol>
          </Box>
          <Exact365DaysGraph />
        </Box>
      </Box>
    </Container>
  );
};

export default InfoTexts;
