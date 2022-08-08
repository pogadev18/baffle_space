import React, { useRef } from 'react';
import { Box, Button, Flex, Text, useDisclosure, Container } from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import dynamic from 'next/dynamic';

import ReloadWhiteList from '@/root/components/landingPage/reloadWhiteList';

const WhitelistDrawer = dynamic(() => import('@/root/components/landingPage/whitelistDrawer'));

const ParticipateToWhiteListBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box width="100%" bg="yellow.400">
      <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
        <Flex
          position="relative"
          h={{ base: 'auto', md: 16 }}
          py={{ base: '10px', md: '20px' }}
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Text order={{ base: '1', sm: '0' }} fontSize="2xl" color="black" fontWeight="900">
            NFT WHITELIST
          </Text>
          <ReloadWhiteList fontSize="16px" />
          <Button
            id="open-whitelist-icon"
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
            right={{ base: '-5px', md: '-5px' }}
            rightIcon={<HiChevronDown />}
          />
        </Flex>
        <WhitelistDrawer isOpen={isOpen} onClose={onClose} />
      </Container>
    </Box>
  );
};

export default ParticipateToWhiteListBanner;
