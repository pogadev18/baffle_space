import React from 'react';

import styles from './MobileRoad.module.scss';

const MobileRoad = () => {
  return (
    <div className={styles.mobileRoadWrapper}>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q3 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={`${styles.checkpointDescription} ${styles.current}`}>
            Landing Page Launch <span>Project Presentation</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q3 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={`${styles.checkpointDescription}`}>
            Community Onboarding <span>Open Communication Channels</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q3 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            Community Earning Mechanism Setup <span>Initial Methods to Earn</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q4 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            Baffle Space NFT Genesis Collection Launch <span>Minting Enabled</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q4 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            Gaming dAPP Launch <span>Play 2 Win and Earn</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q4 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            Second Layer Draw Release <span>Add More Chances to Win for Each Game</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q4 <span>2022</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            Dream Prize Categories Expansion <span>More Dream Prizes to Choose From</span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q1 <span>2023</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            &lsquo;Last Chance&rsquo; Layer Draw Release
            <span>The Final Layer of Winning Chances for Each Game </span>
          </p>
        </div>
      </div>
      <div className={styles.checkpoint}>
        <div className={styles.quarter}>
          <p className={styles.quarterText}>
            Q1 <span>2023</span>
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.checkpointDescription}>
            Supercharge Genesis NFTs
            <span>New Perks And Powers for Genesis NFT Holders </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileRoad;
