import React from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';

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
        <Link
          px={2}
          py={1}
          padding="0"
          color="yellow.400"
          rounded="md"
          _hover={{
            textDecoration: 'underline',
          }}
          href={`/${url}`}
        >
          learn more
        </Link>
      </Box>
    </Box>
  );
};

export default ImageCard;
