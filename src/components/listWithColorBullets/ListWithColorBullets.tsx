import React from 'react';
import { Text, Stack } from '@chakra-ui/react';

import styles from './ListWithColorBullets.module.scss';

const ListWithColorBullets = () => {
  return (
    <Stack spacing={2} paddingLeft="15px" marginTop="45px" textAlign="left">
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          Minimum amount to validate the game and move on to the next step
        </Text>
      </p>
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          Earnings of NFT owning players (distribution based on the number of tickets they purchased
          for the game)
        </Text>
      </p>
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          Prize pool for the secondary draw to be split among 3 lucky winners
        </Text>
      </p>
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          Development and maintenance revenue of Baffle Space
        </Text>
      </p>
    </Stack>
  );
};

export default ListWithColorBullets;
