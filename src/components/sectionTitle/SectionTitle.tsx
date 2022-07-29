import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

interface ISectionTitleProps {
  text: string;
  textColor: string;
}

const SectionTitle = ({ text, textColor }: ISectionTitleProps) => {
  return (
    <Heading lineHeight={1.4} fontWeight={900} fontSize={{ base: '10vw', sm: '40px' }}>
      <Text color={textColor} as="span" textTransform="uppercase" position="relative">
        {text}
      </Text>
    </Heading>
  );
};

export default SectionTitle;
