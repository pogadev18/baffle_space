import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FaTwitter } from 'react-icons/fa';

import ParticipateToWhitelist from '@/root/components/landingPage/participateToWhitelist';

interface IWhiteListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhitelistDrawer = ({ isOpen, onClose }: IWhiteListDrawerProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const redirect = () => {
    window.location.assign('https://twitter.com/');
  };

  return (
    <Drawer size="full" isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent background="yellow.400">
        <DrawerCloseButton fontSize={{ base: '20px', md: '30px' }} margin="10px" color="black" />
        <Box
          display={{ base: 'block', md: 'flex' }}
          overflowY="auto"
          paddingTop={{ base: '65px', md: '0' }}
          height="100vh"
          width="100vw"
          textAlign="center"
          margin="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Center flexDirection="column">
            <Box lineHeight="75px">
              <Flex
                gap={2}
                direction={{ base: 'column', md: 'column' }}
                lineHeight={{ base: '1.6', md: 'auto' }}
              >
                <Text fontSize="30px" textTransform="uppercase" color="black" fontWeight="900">
                  Only 500 Spots on the Whitelist for
                </Text>
                <Text fontSize="30px" textTransform="uppercase" color="black" fontWeight="900">
                  Baffle Space Genesis NFTs with
                </Text>
                <Text
                  position="relative"
                  bottom="20px"
                  fontSize="60px"
                  textTransform="uppercase"
                  color="black"
                  fontWeight="900"
                >
                  25% off
                </Text>
                <Text fontSize="30px" textTransform="uppercase" color="black" fontWeight="900">
                  and the power to
                </Text>
                <Text fontSize="30px" textTransform="uppercase" color="black" fontWeight="900">
                  Earn up to 95ETH
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text
                width={{ base: 'auto', md: '820px' }}
                margin="auto"
                textAlign="center"
                px="15px"
                fontSize="25px"
                color="black"
              >
                Whitelisted owners of Baffle Space NFTs will be the first to earn 5% from the price
                when someone mints an NFT using their referral link.
              </Text>
            </Box>

            <Box mt={10}>
              <Text px="20px" fontWeight="bold" color="black">
                At launch, whitelisted players will have 7 days to mint their NFTs with 30%
                discount.
              </Text>
            </Box>
            <ParticipateToWhitelist />
            <Box background="yellow.300" width="100vw" mt={20} py={5} fontSize="20px">
              <Button
                onClick={redirect}
                width="100%"
                leftIcon={<FaTwitter />}
                color="black"
                fontSize={{ base: '30px', sm: '50px' }}
                fontWeight="900"
                background="0"
                variant="link"
              >
                follow us on Twitter
              </Button>
            </Box>
          </Center>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default WhitelistDrawer;
