import React, { useRef } from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Container,
  IconButton,
  Spinner,
} from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import { FaSync } from 'react-icons/fa';

import WhitelistDrawer from '@/root/components/landingPage/whitelistDrawer';

import { useWhitelistSlots } from '@/root/hooks/useWhitelistSlots';

const ReloadButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton
    onClick={onClick}
    _hover={{ background: 'yellow.300' }}
    variant="ghost"
    aria-label="Search database"
    icon={<FaSync />}
  />
);

const ParticipateToWhiteListBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { whitePaperSlots, fetchSlots, isFetching } = useWhitelistSlots();

  return (
    <Box width="100%" bg="yellow.400">
      <Container maxW="8xl">
        <Flex
          position="relative"
          h={{ base: 'auto', md: 16 }}
          py={{ base: '10px', md: '20px' }}
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Text fontSize="2xl" color="black" fontWeight="900">
            NFT WHITELIST
          </Text>
          <Text
            display="flex"
            alignItems="center"
            fontSize="20px"
            gap={2}
            color="black"
            fontWeight="900"
            textTransform="uppercase"
          >
            {isFetching ? (
              <Spinner color="black" />
            ) : whitePaperSlots ? (
              <>
                {whitePaperSlots} spots
                <ReloadButton onClick={fetchSlots} />
              </>
            ) : (
              <>
                spots left 🧐??
                <ReloadButton onClick={fetchSlots} />
              </>
            )}
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
