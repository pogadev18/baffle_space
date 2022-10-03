import { Image, Text } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';

import styles from './SoftHeader.module.scss';

const RocketLaunch = () => (
  <>
    <div className={styles.rocketProgress}>
      <p className={styles.launchText}>LAUNCH</p>
      <div className={styles.progressBar}>
        <div className={styles.loadingPercentage} />
      </div>
    </div>
    <div className={styles.rocketIcon}>
      <FaRocket />
    </div>
  </>
);

const SoftHeader = () => {
  return (
    <header className={styles.softHeader}>
      <div style={{ textAlign: 'center' }}>
        <Image alt="NFT 2" fit="cover" align="center" h="auto" w="205px" src="./logo_text.webp" />
        <Text fontWeight="bold" color="white" fontSize="13px">
          Raffles for dreams &amp; baffling wins!
        </Text>
      </div>
      <div className={styles.rocketLaunchWrapper}>
        <RocketLaunch />
      </div>
    </header>
  );
};

export default SoftHeader;
