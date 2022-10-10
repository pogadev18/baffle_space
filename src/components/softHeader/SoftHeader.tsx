import { Image, Text } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';
import Link from 'next/link';

import styles from './SoftHeader.module.scss';

const RocketLaunch = () => (
  <>
    <div className={styles.rocketProgress}>
      <p className={styles.launchText}>LAUNCH</p>
      <div className={styles.progressBar}>
        <div style={{ width: '15%' }} className={styles.loadingPercentage}>
          <p>15%</p>
        </div>
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
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Image
              alt="Baffle Space"
              fit="cover"
              align="center"
              h="auto"
              w="205px"
              src="./logo_text.webp"
            />
          </a>
        </Link>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Text fontWeight="bold" color="white" fontSize="13px">
              Raffles for dreams &amp; baffling wins!
            </Text>
          </a>
        </Link>
      </div>
      <div className={styles.rocketLaunchWrapper}>
        <RocketLaunch />
      </div>
    </header>
  );
};

export default SoftHeader;
