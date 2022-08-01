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
            Landing page <span>launch of the landing page</span>
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
            Community onboarding <span>Open communication channels</span>
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
            Community earning mechanism setup <span>Initial method to earn</span>
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
            Baffle Space NFT Genesis Collection Launch <span>Minting enabled</span>
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
            Gaming dAPP Launch <span>Play to win initial dream prizes</span>
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
            Second layer draw release <span>Add more chances to win for each game</span>
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
            Prize categories expansion <span>More dream prizes to choose from</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileRoad;
