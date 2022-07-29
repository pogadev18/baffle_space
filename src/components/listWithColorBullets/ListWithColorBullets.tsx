import React from 'react';
import { Stack } from '@chakra-ui/react';

import styles from './ListWithColorBullets.module.scss';

const ListWithColorBullets = () => {
  return (
    <Stack spacing={2} paddingLeft="15px" marginTop="45px" textAlign="left">
      <p className={styles.textWrapper}>
        <span>Minimum amount to validate the game and move on to the next step</span>
      </p>
      <p className={styles.textWrapper}>
        <span>
          Earnings of NFT owning players (distribution based on the number of tickets they purchased
          for the game)
        </span>
      </p>
      <p className={styles.textWrapper}>
        <span>Prize pool for the secondary draw to be split among 3 lucky winners</span>
      </p>
      <p className={styles.textWrapper}>
        <span>Development and maintenance revenue of Baffle Space</span>
      </p>
    </Stack>
  );
};

export default ListWithColorBullets;
