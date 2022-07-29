import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

import styles from './ImageCard.module.scss';

interface IImageCardProps {
  url: string;
  categoryTitle: string;
}

const ImageCard = ({ url, categoryTitle }: IImageCardProps) => {
  return (
    <Box
      _hover={{ transform: 'scale(1.03)' }}
      transition="0.3s all ease-in-out"
      position="relative"
    >
      <Image
        borderRadius="5px"
        alt="Hero Image"
        fit="cover"
        align="center"
        h="100%"
        w="100%"
        margin="auto"
        src="/whaleBlur.png"
      />
      <Box textAlign="right" position="absolute" bottom="25px" right="25px">
        <Text textTransform="uppercase" color="white" fontWeight="900" fontSize="20px">
          {categoryTitle}
        </Text>
        <Link href={`/${url}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.link}>learn more</a>
        </Link>
      </Box>
    </Box>
  );
};

export default ImageCard;
