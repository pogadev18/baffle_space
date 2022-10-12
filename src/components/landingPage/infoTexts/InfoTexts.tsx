import { ReactNode, Fragment } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

import NftTree from '@/root/components/nftTree';
import LogoTwitter from '@/root/components/logoTwitter';
import LogoTelegram from '@/root/components/logoTelegram';
// import LogoTikTok from '@/root/components/logoTikTok';
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
      <LogoTelegram url="https://t.me/BaffleSpace" />
      <LogoTelegram url="https://t.me/BaffleSpaceAnnouncements" />
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
        <SubHeading>What are baffle space games?</SubHeading>
        <Text color={textColor} fontSize="16px" margin="auto" width={{ base: 'auto', md: '540px' }}>
          Baffle Space Games are hybrid games of chance for which we combined the best features of
          blockchain technology, crypto, NFTs, business, raffles and lotteries to bring real world
          prizes, crypto and gaming ownership to people.
          <br />
          <br />
          Imagine any conventional lottery, how well do you think the owners are doing? Now, through
          ownership of a Baffle Space NFTs you become the owner of a revolutionary gaming system
          which also protects your privacy.
          <br />
          <br />
          Our layered drawing mechanism increases both winnings and chances to win for players,
          while granting Baffle Space NFTs owners 60% of the income generated by the games.
        </Text>
        <Box color="#fff" marginTop="30px">
          <FollowUs alignX="center" />
        </Box>
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
          <SubHeading>What do you win?</SubHeading>
          <ul>
            {whatYouWinTexts.map((benefit) => (
              <li style={{ marginBottom: '10px' }} key={benefit}>
                {benefit}
              </li>
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
        paddingY={{ base: '30px', md: '60px' }}
        borderTop={`1px solid ${borderBlue}`}
        marginBottom={{ base: '20px', md: '60px' }}
        paddingBottom={{ base: '60px', md: '30px' }}
        paddingX={{ base: '15px', '2xl': '80px' }}
      >
        <Box
          textAlign="center"
          paddingTop={{ base: '50px', md: '0px' }}
          paddingBottom={{ base: '30px', md: '0px' }}
        >
          <Box
            height={{ base: 'auto', md: '100vh' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderBottom={`1px solid ${borderBlue}`}
          >
            <section style={{ width: '100%' }}>
              <SubHeading>How do you earn?</SubHeading>
              <Text
                color={textColor}
                fontSize="16px"
                margin="auto"
                width={{ base: 'auto', md: '540px' }}
              >
                The earning system is designed with a community first approach in mind. As opposed
                to conventional games of chance, we decided to distribute the majority of the games’
                income with our community through the{' '}
                <strong>Baffle Space Affiliate Program</strong>.
                <br />
                <br />
                Have your Baffle Space Genesis NFT as soon as they launch and it will grant you the
                power to earn up to <strong>99ETH</strong> by the time they get sold out.
                <br />
                <br />
                When Baffle Space Games start a whopping 60% of the income generated by each game
                will be distributed among NFT owners engaged in the game.
                <br />
                <br />
                You can check your earnings from ticket sales for the games using the earnings
                simulator.
              </Text>
              <Box color="#fff" marginY="40px">
                <FollowUs alignX="center" />
              </Box>
            </section>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={{ base: 'auto', md: '100vh' }}
          id="simulator"
          color="#fff"
        >
          <section style={{ width: '100%' }}>
            <SimulateEarnings />
          </section>
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
        gap={{ base: '20px', md: '50px' }}
        alignItems="center"
      >
        <NftTree />

        <Box marginTop={{ base: '50px', '2xl': '0px' }} color="#fff">
          <SubHeading>
            How to build your <br />
            earning system?
          </SubHeading>
          <ul>
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
        marginBottom={{ base: '20px', md: '20px' }}
        display="flex"
        flexDirection={{ base: 'column', '2xl': 'row' }}
        justifyContent="space-between"
        paddingY={{ base: '30px', md: '0px' }}
        paddingX={{ base: '15px', '2xl': '130px' }}
        gap={{ base: '20px', md: '50px' }}
      >
        <Box width={{ base: 'auto', md: '50%' }}>
          <SubHeading>NFT multiplication system and their powers</SubHeading>
          <Text color="#fff" fontSize="16px">
            1. When the games start, Baffle Space will share 60% of the income raised above the
            validation amount with NFT owners and each owner will be entitled to their share of that
            in proportion to the number of tickets they bought for themselves and/or sold through
            their affiliate links. These types of earnings of NFT owners will further be
            called&nbsp;
            <strong>&lsquo;UniWhale Earnings&rsquo;</strong> throughout the Baffle Space Ecosystem.
            <br />
            <br />
            2. NFT owners earn 5% from all the income generated by their direct descendants.
            (UniWhale Earnings, descendant ticket sales earnings, descendant NFT sales and from the
            5% royalties of Baffle Space from descendant NFT sales).
          </Text>
        </Box>

        <Box width={{ base: 'auto', md: '50%' }}>
          <SubHeading>Descendant NFT Creation</SubHeading>
          <Text color="#fff" fontSize="16px">
            NFT owners will have the ability to create descendant NFTs, free of charge (minus
            minting/transaction fees) and will have the option to give them away or sell them on
            opensea.io marketplace.
            <br />
            <br />
            Descendant NFT creation will be unlocked in stages:
            <br />
            <br />
            1. The first 1000 descendant NFTs will be unlocked for creation upon reaching 10.000
            tickets sold through affiliate links for Baffle Space Games.
            <br />
            <br />
            2. Another 9000 descendant NFTs will be unlocked for creation upon reaching 100.000
            tickets sold through affiliate links for Baffle Space Games.
            <br />
            <br />
            As long as the above criteria for descendant NFT creation is reached, all NFT
            generations have the ability to create descendant NFTs.
          </Text>
        </Box>
      </Box>

      <Box
        marginBottom={{ base: '20px', md: '60px' }}
        display="flex"
        flexDirection={{ base: 'column', '2xl': 'row' }}
        justifyContent="space-between"
        paddingY={{ base: '30px', md: '0px' }}
        paddingX={{ base: '15px', '2xl': '130px' }}
        gap={{ base: '20px', md: '50px' }}
      >
        <Box width={{ base: 'auto', md: '50%' }}>
          <SubHeading>Descendant NFT Heritage &amp; Tribute</SubHeading>
          <Text color="#fff" fontSize="16px">
            Descendant NFTs inherit all earning powers and abilities of their parent NFT. Descendant
            NFT owners pay 5% of their income to their parent NFT: UniWhale Earnings, ticket sales
            earnings, descendant NFT sales and from the 5% royalties of Baffle Space from descendant
            NFT sales.
          </Text>
        </Box>

        <Box width={{ base: 'auto', md: '50%' }}>
          <SubHeading>NFT Owners Earnings Payouts</SubHeading>
          <Text color="#fff" fontSize="16px">
            Earnings of NFT owners will be carried out automatically at the end of each game in
            $MATIC to the wallet address of the NFT owner.
          </Text>
        </Box>
      </Box>

      <Box
        marginBottom="60px"
        paddingTop="30px"
        textAlign="center"
        borderTop={`1px solid ${borderBlue}`}
      >
        <SubHeading>
          How is the income from Baffle Space <br />
          Games distributed?
        </SubHeading>
        <Box
          display="flex"
          borderBottom={`1px solid ${borderBlue}`}
          flexDirection={{ base: 'column', '2xl': 'row' }}
          justifyContent="space-between"
          paddingY="30px"
          paddingX={{ base: '0px', '2xl': '80px' }}
          gap="25px"
          alignItems="center"
        >
          <Box textAlign="left" color="#fff">
            <SoftHeading marginBottom="20px">
              Weekly to Quarterly contests income distribution
            </SoftHeading>
            <ol style={{ listStyle: 'decimal', paddingLeft: '15px' }}>
              {less365DaysTexts.map((text) => (
                <li style={{ marginBottom: '10px' }} key={text}>
                  {text}
                </li>
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
            <SoftHeading marginBottom="20px">Yearly contests income distribution</SoftHeading>
            <ol style={{ listStyle: 'decimal', paddingLeft: '15px' }}>
              {exact365DaysTexts.map((text) => (
                <li style={{ marginBottom: '10px' }} key={text}>
                  {text}
                </li>
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
