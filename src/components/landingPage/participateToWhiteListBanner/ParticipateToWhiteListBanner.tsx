import { Box, Button, Flex, Text, useDisclosure, Container } from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import React, { useRef } from 'react';
import WhitelistDrawer from '@/root/components/landingPage/whitelistDrawer';

const ParticipateToWhiteListBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box width="100%" bg="yellow.400">
      <Container maxW="8xl">
        <Flex
          position="relative"
          h={{ base: 70, md: 16 }}
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: 'column-reverse', md: 'row' }}
          // py={{ base: '10px', md: '0' }}
        >
          <Text fontSize="2xl" color="black" fontWeight="900">
            NFT WHITELIST
          </Text>
          <Text fontSize="20px" color="black" fontWeight="900" textTransform="uppercase">
            20 spots remaining
          </Text>
          <Button
            _hover={{
              background: '0',
            }}
            background="0"
            fontSize="30px"
            padding="0"
            ref={btnRef}
            onClick={onOpen}
            position={{ base: 'absolute', md: 'relative' }}
            top={{ base: '5px', md: '0' }}
            right={{ base: '-5px', md: '0' }}
            rightIcon={<HiChevronDown />}
          />
        </Flex>
        <WhitelistDrawer isOpen={isOpen} onClose={onClose} />
      </Container>
    </Box>
  );
};

export default ParticipateToWhiteListBanner;
