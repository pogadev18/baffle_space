import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '@/root/components/landingPage/whitepaperSections/WhitepaperSections.module.scss';
import React from 'react';

const GenesisNFT = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: '11vw', sm: '25px' }}
        fontWeight="900"
        color="white"
        marginBottom="20px"
      >
        Baffle Space Genesis NFT Collection
      </Heading>
      <p>
        Baffle Space UniWhale NFTs will be the digital assets of Baffle Space. Through them NFT
        owners hold uncapped and perpetual earning powers.
      </p>
      <p>
        Think of owning an UniWhale NFT as having the paperwork for your own business within the
        Baffle Space Ecosystem, an affiliate business on the blockchain with chances to win Dream
        Prizes. The more people you manage to bring to mint their NFT using your referral link and
        play for the Dream Prizes Baffle Space offers, the more you will earn.
      </p>
      <p>
        Bringing people to mint and play will increase your earnings when Baffle Space Games start.
      </p>
      <ol>
        <li>
          <strong>Whitelist & Mint Earnings</strong>
          <p>
            While we work intensely on designing the NFTs, we opened a whitelist with 500 spots
            available for people who want to be among the first to own a business on the blockchain
            within the Baffle Space Ecosystem and get 25% off when minting will begin.
          </p>
          <p>
            Whitelisted wallets will have 24h to mint their NFTs with 25% off before the minting
            goes public. This way you will have a head start to share your referral link.
          </p>
          <p>
            The Baffle Space Genesis NFT Collection is capped at 10.000 and will never increase.
            Being one of the 500 whitelisters, you will have the power to earn 5% off of every NFT
            minted using your referral link. With this percentage you will be able to earn up to 95
            ETH by the time the Baffle Space Genesis NFT Collection gets sold out.
          </p>
        </li>
        <li>
          <strong>Baffle Space Games Start As An NFT Owner</strong>
          <p>
            Shortly after the NFT minting will be accomplished the first version of the Baffle Space
            Gaming dApp will be launched&nbsp;
            <Link href="/whitepaper#roadmap">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={styles.link}>(see the roadmap).</a>
            </Link>
          </p>
          <p>
            When Baffle Space Games start, you will get to experience the day-to-day ownership of
            the business.
          </p>
          <p>
            Eg: You have a community on social media platforms. Offer your followers discounts for
            tickets through a second referral link you will be able to find in your dashboard when
            you login with MetaMask.
          </p>
          <p>
            You will have at your disposal 5% from ticket prices to determine this part of your
            business strategy. How much you offer as a discount to get people to buy their tickets
            using your referral link and how much you keep for yourself. You will be able to set the
            discount percentage for your referral link from 0%-5%.
          </p>
          <ol>
            <li>
              <strong>Cumulative discounted chances</strong>
              <p>
                When people buy ticket packages for Dream Prizes using your second referral link,
                the discount you offer them, adds up to the discount we offer all players for
                purchasing multiple ticket packages for increased chances of winning.
              </p>
            </li>
            <li>
              <strong>Increasing your share of the pie</strong>
              <p>
                After the accumulation step of each game is completed and the validation amount is
                passed, the tickets bought using your referral link will increase the weight of your
                share as they will count as if they were bought by you. This means your piece from
                the 60% pie above the validation amount will be far greater and bring you more
                earnings.
              </p>
            </li>
            <li>
              <strong>Descendant NFT Creation Revenue</strong>
              <p>
                Baffle Space Genesis NFT owners will have the ability to generate
                &ldquo;offspring&rdquo; NFTs, free of charge ( minus minting/transaction fees). You,
                as the owner will have the option to distribute them for free or sell them on
                opensea.io marketplace. <br />
                <br />
                Think of them as descendants who are also your employees. You will have to care for
                them by keeping them up to date with Baffle Space Games because 5% from each ticket
                they purchase will accumulate to your earnings. As long as they play for Dream
                Prizes in Baffle Space Games you will earn. We want to emphasize that all these
                earnings are on top of your second affiliate link earnings and the chances(tickets)
                you purchase yourself for each Dream Prize.
              </p>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default GenesisNFT;
