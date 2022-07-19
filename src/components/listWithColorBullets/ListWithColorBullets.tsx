import React from 'react';
import { Text, Stack } from '@chakra-ui/react';

import styles from './ListWithColorBullets.module.scss';

const ListWithColorBullets = () => {
  return (
    <Stack spacing={2} paddingLeft="15px" marginTop="45px" textAlign="left">
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          sdsdsd fdsfs s dsdssdfdfgdf
        </Text>
      </p>
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          sdsdsd dfsdgdfg fgdfgd dfgdfgfd
        </Text>
      </p>
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          sdsdsd fdgdfgdf dfgdfgdf
        </Text>
      </p>
      <p className={styles.textWrapper}>
        <Text color="black" fontSize="18px">
          sdsdsdawadawda sasdas asdwdwd aa asdsfgrsgrd
        </Text>
      </p>
    </Stack>
  );
};

export default ListWithColorBullets;
