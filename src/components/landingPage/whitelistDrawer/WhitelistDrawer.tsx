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

import ParticipateToWhitelist from '@/root/components/landingPage/participateToWhitelist';
import { FaTwitter } from 'react-icons/fa';

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
        <DrawerCloseButton />
        <Flex
          height="100vh"
          width="100vw"
          textAlign="center"
          margin="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Center flexDirection="column">
            <Box mb={20}>
              <Text textTransform="uppercase" fontWeight="900" color="black" fontSize="20px">
                20 spots remaining
              </Text>
            </Box>
            <Box lineHeight="75px">
              <Flex gap={2}>
                <Text fontSize="30px" textTransform="uppercase" color="black" fontWeight="900">
                  Only 500 with
                </Text>
                <Text
                  position="relative"
                  bottom="20px"
                  fontSize="60px"
                  textTransform="uppercase"
                  color="black"
                  fontWeight="900"
                >
                  30% off
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize="25px" color="black">
                Join the NFT whitelist to become one of the first founders of Baffle.Space
              </Text>
            </Box>

            <Box mt={10}>
              <Text>
                At launch, whitelisted players will have 7 days to mint their NFTs at 30% discount.
              </Text>
            </Box>
            <ParticipateToWhitelist />
            <Box background="yellow.300" width="100vw" mt={20} py={5} fontSize="20px">
              <Button
                onClick={redirect}
                width="100%"
                leftIcon={<FaTwitter />}
                color="black"
                fontSize="30px"
                fontWeight="900"
                background="0"
                variant="link"
              >
                follow us on Twitter
              </Button>
            </Box>
          </Center>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default WhitelistDrawer;
