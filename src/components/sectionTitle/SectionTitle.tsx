import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

interface ISectionTitleProps {
  firstPart: string;
  firstPartColor: string;
  secondPart: string;
  secondPartColor: string;
}

const SectionTitle = ({
  firstPart,
  secondPart,
  firstPartColor,
  secondPartColor,
}: ISectionTitleProps) => {
  return (
    <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: '10vw', sm: '40px' }}>
      <Text color={firstPartColor} as="span" textTransform="uppercase" position="relative">
        {firstPart}&nbsp;
      </Text>
      <Text
        position="relative"
        bottom={{ base: '0', md: '5px' }}
        fontSize={{ base: '13vw', sm: '60px' }}
        display={{ base: 'block', md: 'inline-block' }}
        fontWeight="900"
        textTransform="uppercase"
        as="span"
        color={secondPartColor}
      >
        {secondPart}&nbsp;
      </Text>
    </Heading>
  );
};

export default SectionTitle;
