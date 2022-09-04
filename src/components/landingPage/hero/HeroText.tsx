import { Box, Text } from '@chakra-ui/react';

import styles from './Hero.module.scss';

const HeroText = () => {
  return (
    <Box textAlign="center">
      <h2 className={styles.heroTitle}>
        <span className={styles.firstTitle}>
          Play <span className={styles.pinkWord}>to</span>
        </span>
        &nbsp;
        <br /> <span className={styles.secondTitle}>win &amp; Earn</span>
      </h2>
      <div className={styles.textWrapper}>
        <Text textAlign="center" margin="0 auto" width={{ base: 'auto', md: '500px' }}>
          Baffle Space hosts hybrid games of chance playable with crypto, where participants win
          real world prizes, crypto and can also earn as owners of the games.
        </Text>
      </div>
    </Box>
  );
};

export default HeroText;
