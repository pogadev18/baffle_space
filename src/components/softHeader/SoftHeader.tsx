import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Tooltip,
} from '@chakra-ui/react';

import { useMoralis } from 'react-moralis';

import { CloseIcon } from '@chakra-ui/icons';
import { FaGripLines } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';

import NavLink from '@/root/components/navLink';
import Logo from '@/root/components/logo';
import DisconnectButton from '@/root/components/disconnectButton';
import useMetamaskAvailability from '@/root/hooks/useMetamaskAvailability';

import { renderLinksUrl } from '@/root/utils/utilityFunctions';

const Links = ['Home', 'Team', 'Roadmap'];

const SoftHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating } = useMoralis();
  const { metamaskAvailable } = useMetamaskAvailability();

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Auth required by Baffle.space',
      });
    }
  };

  return (
    <Box
      width="100%"
      position={{ base: 'static', lg: 'absolute' }}
      zIndex="10"
      background="transparent"
    >
      <Container
        position="relative"
        paddingBottom={{ base: '1.25rem', md: '0' }}
        paddingX={{ base: '25px', md: '40px' }}
        maxW="8xl"
      >
        <Flex
          h="90px"
          alignItems="center"
          justifyContent={{ base: 'auto', md: 'space-between' }}
          wrap={{ base: 'wrap' }}
        >
          <IconButton
            data-ismenuopen={isOpen}
            order={1}
            marginTop={{ base: 5, md: 0 }}
            // variant="outline"
            colorScheme="#00B0CA"
            borderColor="#00B0CA"
            size="md"
            icon={
              isOpen ? <CloseIcon color="#00B0CA" /> : <FaGripLines size="30px" color="#00B0CA" />
            }
            aria-label="Open Menu"
            display={{ lg: 'none' }}
            onClick={onOpen}
          />
          <HStack
            marginTop={{ base: 5, md: 0 }}
            flex={{ base: '1' }}
            spacing={8}
            alignItems="center"
          >
            <Box>
              <Logo width="60" height="60" />
            </Box>
            <HStack flex="1" as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }}>
              {Links.map((link) => (
                <NavLink url={renderLinksUrl(link)} key={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
            <Box display={{ base: 'none', lg: 'block' }}>
              {isAuthenticated ? (
                <DisconnectButton color="white" fontSize="14px" size="xl" variant="ghost" />
              ) : (
                <Tooltip
                  hasArrow
                  label={!metamaskAvailable ? 'Install MetaMask to connect' : ''}
                  bg="red.600"
                >
                  <Button
                    variant="ghost"
                    onClick={handleLogin}
                    size="sm"
                    rounded="xl"
                    color="white"
                    rightIcon={<IoWalletOutline />}
                    isLoading={isAuthenticating}
                    _hover={{ background: '#00B0CA' }}
                  >
                    Connect
                  </Button>
                </Tooltip>
              )}
            </Box>
          </HStack>
        </Flex>
        {isOpen && (
          <Drawer size="full" isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent backgroundColor="#000">
              <DrawerCloseButton color="white" size="xl" margin="15px" />
              <DrawerBody marginY="45px">
                <Stack as="nav" spacing={4}>
                  {Links.map((link) => (
                    <NavLink onClick={onClose} url={renderLinksUrl(link)} key={link}>
                      {link}
                    </NavLink>
                  ))}
                  <hr />
                  <Box>
                    {isAuthenticated ? (
                      <DisconnectButton color="white" fontSize="14px" size="xl" variant="ghost" />
                    ) : (
                      <Tooltip
                        hasArrow
                        label={!metamaskAvailable ? 'Install MetaMask to connect' : ''}
                        bg="red.600"
                      >
                        <Button
                          variant="ghost"
                          onClick={handleLogin}
                          size="sm"
                          rounded="xl"
                          color="white"
                          rightIcon={<IoWalletOutline />}
                          isLoading={isAuthenticating}
                          _hover={{ background: '#00B0CA' }}
                        >
                          Connect
                        </Button>
                      </Tooltip>
                    )}
                  </Box>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Container>
    </Box>
  );
};

export default SoftHeader;
