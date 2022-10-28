import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Spinner,
  Stack,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import detectEthereumProvider from '@metamask/detect-provider';
import { IoWalletOutline } from 'react-icons/io5';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useMoralis } from 'react-moralis';

import Logo from '@/root/components/logo';
// import ParticipateToWhiteListBanner from '@/root/components/landingPage/participateToWhiteListBanner';
import NavLink from '@/root/components/navLink';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';
import { renderLinksUrl } from '@/root/utils/utilityFunctions';

const Links = ['The gameplay', 'NFTs', 'Roadmap', 'Team', 'Whitepaper'];

const AlertComponent = dynamic(() => import('@/root/components/alert'));
const Dashboard = dynamic(() => import('@/root/components/dashboard'));
const MetamaskHelpText = dynamic(() => import('@/root/components/landingPage/metamaskHelpText'));

const LandingPageHeader = () => {
  const [metamaskAvailability, setMetamaskAvailability] = useState('pending');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating, authError } = useMoralis();

  useEffect(() => {
    if (authError) {
      const toggleErrorButton = document.getElementById('toggle-metamask-help-text');
      if (toggleErrorButton) {
        toggleErrorButton.click();
      }
    }
  }, [authError]);

  useEffect(() => {
    const checkMetamaskAvailability = async () => {
      try {
        const provider = await detectEthereumProvider();

        if (provider) {
          setMetamaskAvailability('ok');
        }

        if (!provider) {
          setMetamaskAvailability('notFound');
        }
      } catch (error) {
        setMetamaskAvailability('error');
        throw new Error('No metamask provider available!');
      }
    };

    checkMetamaskAvailability();
  }, []);

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Auth required by Baffle.space',
      });
    }
  };

  return (
    <>
      {metamaskAvailability === 'pending' ? (
        <div style={{ position: 'absolute', padding: '15px', zIndex: '20' }}>
          <Spinner color="pink" />
        </div>
      ) : !isAuthenticated && metamaskAvailability === 'notFound' ? (
        <AlertComponent
          showIcon={false}
          status={AlertStatusValues.Info}
          title={isMobile ? 'MetaMask Access' : 'MetaMask Connection'}
        >
          <MetamaskHelpText />
        </AlertComponent>
      ) : null}

      {/* <ParticipateToWhiteListBanner /> */}

      <Box
        width="100%"
        position={{ base: 'static', lg: 'absolute' }}
        top={!isAuthenticated && metamaskAvailability === 'notFound' ? '40px' : '0'}
        zIndex="10"
        background={{ base: '#2a134b', lg: 'transparent' }}
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
              variant="outline"
              colorScheme="pink.900"
              borderColor="pink.900"
              size="md"
              icon={isOpen ? <CloseIcon color="pink.900" /> : <HamburgerIcon color="pink.900" />}
              aria-label="Open Menu"
              display={{ lg: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              marginTop={{ base: 5, md: 0 }}
              flex={{ base: '1' }}
              spacing={8}
              alignItems="center"
            >
              <Box>
                <Logo width="50" height="50" />
              </Box>
              <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }}>
                {Links.map((link) => (
                  <NavLink url={renderLinksUrl(link)} key={link}>
                    {link}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex
              marginTop={{ base: 15, md: 0 }}
              alignItems="center"
              display={{ base: 'none', lg: 'block' }}
            >
              {isAuthenticated && <Dashboard />}
              {!isAuthenticated && (
                <Tooltip
                  hasArrow
                  label={
                    metamaskAvailability === 'notFound'
                      ? 'MetaMask needs to be installed in order to connect'
                      : ''
                  }
                  bg="pink.900"
                >
                  <Button
                    variant="ghost"
                    onClick={handleLogin}
                    size="sm"
                    rounded="full"
                    color="white"
                    rightIcon={<IoWalletOutline />}
                    isLoading={isAuthenticating}
                    _hover={{ background: 'pink.900' }}
                  >
                    Connect
                  </Button>
                </Tooltip>
              )}
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ lg: 'none' }}>
              <Stack as="nav" spacing={4}>
                {isAuthenticated && (
                  <Box width="100%" marginTop="25px">
                    <Dashboard />
                  </Box>
                )}
                {!isAuthenticated && (
                  <Tooltip
                    hasArrow
                    label={
                      metamaskAvailability === 'notFound'
                        ? 'MetaMask needs to be installed in order to connect'
                        : ''
                    }
                    bg="red.600"
                  >
                    <Button
                      variant="solid"
                      onClick={handleLogin}
                      size="md"
                      margin="25px 0 10px 0"
                      paddingY="23px"
                      width="100%"
                      colorScheme="pink"
                      rounded="full"
                      isLoading={isAuthenticating}
                    >
                      Connect with MetaMask
                    </Button>
                  </Tooltip>
                )}
                {Links.map((link) => (
                  <NavLink onClick={onClose} url={renderLinksUrl(link)} key={link}>
                    {link}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default LandingPageHeader;
