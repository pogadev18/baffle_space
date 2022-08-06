import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getOffset } from '@/root/utils/utilityFunctions';

import Introduction from './Introduction';
import EnterBaffleSpace from './EnterBaffleSpace';
import TheGameplay from './TheGameplay';
import GenesisNFT from './GenesisNFT';
import WhitelistAndMint from './WhitelistAndMint';
import GameStart from './GameStart';
import NFTMint from './NFTMint';
import BaffleSpaceGames from './Games';

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
            <Link scroll href="#whitelistAndMint">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Whitelist & Mint</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#gameStart">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Baffle Space Game Start NFT</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#nftMint">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>NFT Mint</a>
            </Link>
          </li>
          <li>
            <Link scroll href="#games">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Baffle Space Games</a>
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
        <section id="whitelistAndMint">
          <WhitelistAndMint />
        </section>
        <section id="gameStart">
          <GameStart />
        </section>
        <section id="nftMint">
          <NFTMint />
        </section>
        <section id="games">
          <BaffleSpaceGames />
        </section>
      </section>
    </div>
  );
};

export default WhitepaperSections;
