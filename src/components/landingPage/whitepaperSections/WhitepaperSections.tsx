import React from 'react';
import Link from 'next/link';

import Introduction from './Introduction';
import EnterBaffleSpace from './EnterBaffleSpace';

import styles from './WhitepaperSections.module.scss';

const WhitepaperSections = () => {
  return (
    <div className={styles.sectionWrapper}>
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
          <Link scroll href="#whitelist">
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

      <section className={styles.content}>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="enterBaffle">
          <EnterBaffleSpace />
        </section>
      </section>
    </div>
  );
};

export default WhitepaperSections;
