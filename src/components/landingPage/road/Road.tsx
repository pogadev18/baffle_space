import { Image } from '@chakra-ui/react';

import styles from './Road.module.scss';

const Road = () => {
  return (
    <>
      <section className={styles.roadWrapper}>
        <div className={styles.roadContent}>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
            <p className={styles.movingCar}>
              <Image
                alt="Car Image"
                fit="cover"
                align="center"
                h="100%"
                w="200px"
                margin="auto"
                src="/car.png"
              />
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q4 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q4 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q4 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q4 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q1 <span>2023</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q1 <span>2023</span>
            </p>
          </div>
        </div>
        <div className={styles.roadDescriptions}>
          <p className={`${styles.checkpointDescription} ${styles.current}`}>
            Landing Page Launch <span>Project Presentation</span>
          </p>
          <p className={styles.checkpointDescription}>
            Community Onboarding <span>Open Communication Channels</span>
          </p>
          <p className={styles.checkpointDescription}>
            Community Earning Mechanism Setup <span>Initial Method to Earn</span>
          </p>
          <p className={styles.checkpointDescription}>
            Baffle Space NFT Genesis Collection Launch <span>Minting Enabled</span>
          </p>
          <p className={styles.checkpointDescription}>
            Gaming dAPP Launch <span>Play 2 Win and Earn</span>
          </p>
          <p className={styles.checkpointDescription}>
            Second Layer Draw Release <span>Add More Chances to Win for Each Game</span>
          </p>
          <p className={styles.checkpointDescription}>
            Dream Prize Categories Expansion <span>More Dream Prizes to Choose From</span>
          </p>
          <p className={styles.checkpointDescription}>
            &lsquo;Last Chance&rsquo; Layer Draw Release
            <span>The Final Layer of Winning Chances for Each Game </span>
          </p>
          <p className={styles.checkpointDescription}>
            Supercharge Genesis NFTs
            <span>New Perks And Powers for Genesis NFT Holders </span>
          </p>
        </div>
      </section>

      <section className={styles.rocketLaunch}>
        <div className={styles.launchCol1}>
          <p className={`${styles.quarterText} ${styles.noBorder}`}>
            Q2 <span>2023</span>
          </p>
        </div>
        <div className={styles.launchCol2}>
          <Image
            alt="Car Image"
            fit="cover"
            align="center"
            h="100%"
            w="300px"
            margin="auto"
            src="/rocket.png"
          />
          <p className={styles.checkpointDescription}>
            International Launch <span>The Option of Claiming Dream Prizes Goes International</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Road;
