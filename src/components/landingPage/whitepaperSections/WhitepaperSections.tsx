import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Heading } from '@chakra-ui/react';

// import Roadmap from '@/root/pages/roadmap';
import CoreTeamMembers from '@/root/components/landingPage/coreTeamMembers';

import { getOffset } from '@/root/utils/utilityFunctions';

import Introduction from './Introduction';
import EnterBaffleSpace from './EnterBaffleSpace';
import TheGameplay from './TheGameplay';
import GenesisNFT from './GenesisNFT';
import NFTMint from './NFTMint';

import styles from './WhitepaperSections.module.scss';

const WhitepaperSections = () => {
  const [areTopicsVisible, setAreTopicsVisible] = useState(true);

  const listenToScroll = () => {
    const heightToHideFrom = getOffset(document.querySelector('#footer'));
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > heightToHideFrom) {
      setAreTopicsVisible(false);
    } else {
      setAreTopicsVisible(true);
    }
  };

  useEffect(() => {
    const screenWidth = window.screen.width;
    const MOBILE_SCREEN_WIDTH = 767;

    if (screenWidth <= MOBILE_SCREEN_WIDTH) {
      window.addEventListener('scroll', listenToScroll);
    }

    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className={styles.sectionWrapper}>
      {areTopicsVisible && (
        <ul className={styles.topics}>
          <li>
            <Link scroll href="#introduction">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Introduction to the global context</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#enterBaffle">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Enter Baffle Space</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#gameplay">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>The Gameplay</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#genesisNFT">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Baffle Space Genesis NFT Collection</a>
            </Link>
          </li>

          <li>
            <Link scroll href="#nftMint">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Payouts</a>
            </Link>
          </li>

          <li>
            <Link scroll href="#roadmap">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#team">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Team</a>
            </Link>
          </li>
        </ul>
      )}

      <section className={styles.content}>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="enterBaffle">
          <EnterBaffleSpace />
        </section>
        <section id="gameplay">
          <TheGameplay />
        </section>
        <section id="genesisNFT">
          <GenesisNFT />
        </section>

        <section id="nftMint">
          <NFTMint />
        </section>

        <section id="roadmap">
          <Heading
            as="h3"
            fontSize={{ base: '11vw', sm: '25px' }}
            fontWeight="900"
            color="white"
            marginBottom="20px"
          >
            Roadmap
          </Heading>
          {/* <Roadmap isOnWhitepaperPage /> */}
        </section>
        <section id="team">
          <Heading
            as="h3"
            fontSize={{ base: '11vw', sm: '25px' }}
            fontWeight="900"
            color="white"
            marginBottom="20px"
          >
            Team
          </Heading>
          <CoreTeamMembers desktopNumberOfColumns={2} />
        </section>
      </section>
    </div>
  );
};

export default WhitepaperSections;
