import Head from 'next/head';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import SectionTitle from '@/root/components/sectionTitle';
import React from 'react';
import Link from 'next/link';
import styles from '@/root/components/landingPage/whitepaperSections/WhitepaperSections.module.scss';

const NFTs = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | NFTs</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop={{ base: '25px', md: '60px' }}>
            <Heading
              as="h1"
              fontSize={{ base: '14vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom={{ base: '25px', md: '60px' }}
            >
              Genesis <span style={{ color: '#ffc100' }}>NFT </span>Collection
            </Heading>
          </Box>

          <Box textAlign="center" marginBottom="60px" color="white">
            <Text color="white" margin="auto" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
              Baffle Space UniWhale NFTs will be the digital assets of Baffle Space. Through them
              NFT owners hold uncapped and perpetual earning powers.
            </Text>
          </Box>
          <Box marginY="60px">
            <Flex gap={10} direction={{ base: 'column', sm: 'row' }}>
              <Box>
                <Image
                  borderRadius="5px"
                  alt="Hero Image"
                  fit="cover"
                  align="center"
                  h="100%"
                  w="100%"
                  margin="auto"
                  src="/nft1.png"
                />
              </Box>
              <Box>
                <Image
                  borderRadius="5px"
                  alt="Hero Image"
                  fit="cover"
                  align="center"
                  h="100%"
                  w="100%"
                  margin="auto"
                  src="/nft2.png"
                />
              </Box>
              <Box>
                <Image
                  borderRadius="5px"
                  alt="Hero Image"
                  fit="cover"
                  align="center"
                  h="100%"
                  w="100%"
                  margin="auto"
                  src="/nft3.png"
                />
              </Box>
            </Flex>
            <Text
              textAlign="center"
              color="white"
              fontSize="18px"
              margin="30px auto 0"
              width={{ base: 'auto', md: '820px' }}
            >
              Think of owning an UniWhale NFT as having the paperwork for your own business within
              the Baffle Space Ecosystem, an affiliate business on the blockchain with chances to
              win Dream Prizes. The more people you manage to bring to mint their NFT using your
              referral link and play for the Dream Prizes Baffle Space offers, the more you will
              earn.
              <br />
              <br />
              Bringing people to mint and play will increase your earnings when Baffle Space Games
              start.
            </Text>
          </Box>
          <Box textAlign="center" marginBottom="60px" color="white">
            <SectionTitle text="Whitelist & Mint Earnings" textColor="white" />
            <Text margin="auto" color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
              While we work intensely on designing the NFTs, we opened a whitelist with 500 spots
              available for people who want to be among the first to own a business on the
              blockchain within the Baffle Space Ecosystem and get 25% off when minting will begin.
              <br />
              <br />
              Whitelisted wallets will have 24h to mint their NFTs with 25% off before the minting
              goes public. This way you will have a head start to share your referral link.
              <br />
              <br />
              The Baffle Space Genesis NFT Collection is capped at 10.000 and will never increase.
              Being one of the 500 whitelisters, you will have the power to earn 5% off of every NFT
              minted using your referral link. With this percentage you will be able to earn up to
              95 ETH by the time the Baffle Space Genesis NFT Collection gets sold out.
            </Text>
          </Box>
        </Container>

        <Box width="100%" background="black.800">
          <Container maxW="8xl" paddingY={{ base: '25px', md: '60px' }}>
            <Box textAlign="center" color="white">
              <SectionTitle text="Baffle Space Games Start As An NFT Owner" textColor="white" />
              <Text
                margin=" 10px auto 0"
                color="white"
                fontSize="18px"
                width={{ base: 'auto', md: '820px' }}
              >
                Shortly after the NFT minting will be accomplished the first version of the Baffle
                Space Gaming dApp will be launched&nbsp;
                <Link href="/whitepaper#roadmap">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className={styles.link}>(see the roadmap).</a>
                </Link>
                <br />
                <br />
                When Baffle Space Games start, you will get to experience the day-to-day ownership
                of the business.
                <br />
                <br />
                Eg: You have a community on social media platforms. Offer your followers discounts
                for tickets through a second referral link you will be able to find in your
                dashboard when you login with MetaMask.
                <br />
                <br />
                You will have at your disposal 5% from ticket prices to determine this part of your
                business strategy. How much you offer as a discount to get people to buy their
                tickets using your referral link and how much you keep for yourself. You will be
                able to set the discount percentage for your referral link from 0%-5%.
              </Text>
            </Box>
          </Container>
        </Box>

        <Box width="100%" background="yellow.400">
          <Container
            maxW="8xl"
            paddingX={{ base: '25px', md: '40px' }}
            paddingY={{ base: '25px', md: '60px' }}
          >
            <Box textAlign="center" marginBottom="60px" color="white">
              <SectionTitle text="Cumulative discounted chances" textColor="black" />
              <Text
                color="black"
                margin="auto"
                fontSize="18px"
                width={{ base: 'auto', md: '820px' }}
              >
                When people buy ticket packages for Dream Prizes using your second referral link,
                the discount you offer them, adds up to the discount we offer all players for
                purchasing multiple ticket packages for increased chances of winning.
              </Text>
            </Box>
            <Box textAlign="center" marginBottom="60px" color="white">
              <SectionTitle text="Increasing your share of the pie" textColor="black" />
              <Text
                color="black"
                margin="auto"
                fontSize="18px"
                width={{ base: 'auto', md: '820px' }}
              >
                After the accumulation step of each game is completed and the validation amount is
                passed, the tickets bought using your referral link will increase the weight of your
                share as they will count as if they were bought by you. This means your piece from
                the 60% pie above the validation amount will be far greater and bring you more
                earnings.
              </Text>
            </Box>
          </Container>
        </Box>
        <Box
          textAlign="center"
          paddingX={{ base: '25px', md: '40px' }}
          paddingY={{ base: '25px', md: '60px' }}
          color="white"
        >
          <SectionTitle text="Descendant NFT Creation Revenue" textColor="white" />
          <Text margin="auto" color="white" fontSize="18px" width={{ base: 'auto', md: '820px' }}>
            Baffle Space Genesis NFT owners will have the ability to generate
            &ldquo;offspring&rdquo; NFTs, free of charge ( minus minting/transaction fees). You, as
            the owner will have the option to distribute them for free or sell them on opensea.io
            marketplace. <br />
            <br />
            Think of them as descendants who are also your employees. You will have to care for them
            by keeping them up to date with Baffle Space Games because 5% from each ticket they
            purchase will accumulate to your earnings. As long as they play for Dream Prizes in
            Baffle Space Games you will earn. We want to emphasize that all these earnings are on
            top of your second affiliate link earnings and the chances(tickets) you purchase
            yourself for each Dream Prize.
          </Text>
        </Box>
      </Box>
    </>
  );
};

NFTs.landingPage = true;

export default NFTs;
