import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import detectEthereumProvider from '@metamask/detect-provider';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useMoralis } from 'react-moralis';
import { isMobile } from 'react-device-detect';

import Logo from '@/root/components/logo';
import ParticipateToWhiteListBanner from '@/root/components/landingPage/participateToWhiteListBanner';
import NavLink from '@/root/components/navLink';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';
import { METAMASK_APP_URL } from '@/root/constants';
import { renderLinksUrl } from '@/root/utils/utilityFunctions';

const Links = ['The gameplay', 'NFTs', 'Roadmap', 'Team', 'Whitepaper'];

const AlertComponent = dynamic(() => import('@/root/components/alert'));
const Dashboard = dynamic(() => import('@/root/components/dashboard'));

const MetamaskHelpText = () => (
  <p>
    In order to fully experience Baffle Space, you need to access the website from MetaMask. Tap the
    link below to install MetaMask or to open the website in MetaMask if you already have it.
    <br />
    <p>
      <a href={METAMASK_APP_URL}>
        <strong> Tap to enter from MetaMask</strong>
      </a>
    </p>
  </p>
);

const LandingPageHeader = () => {
  const [metamaskAvailability, setMetamaskAvailability] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating, authError } = useMoralis();

  useEffect(() => {
    const checkMetamaskAvailability = async () => {
      try {
        const provider = await detectEthereumProvider();

        if (provider) {
          setMetamaskAvailability(true);
        }
      } catch (error) {
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
      {!isAuthenticated && isMobile && !metamaskAvailability && (
        <AlertComponent status={AlertStatusValues.Info} title="MetaMask Mobile Access">
          <MetamaskHelpText />
        </AlertComponent>
      )}

      {authError && (
        <AlertComponent status={AlertStatusValues.Error} title="Something went wrong">
          <p>{authError.message}</p>
        </AlertComponent>
      )}

      <ParticipateToWhiteListBanner />

      <Box width="100%" bg="black.900">
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
              colorScheme="yellow.400"
              borderColor="yellow.400"
              size="md"
              icon={
                isOpen ? <CloseIcon color="yellow.400" /> : <HamburgerIcon color="yellow.400" />
              }
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              marginTop={{ base: 5, md: 0 }}
              flex={{ base: '1' }}
              spacing={8}
              alignItems="center"
            >
              <Box>
                <Logo />
              </Box>
              <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
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
              display={{ base: 'none', md: 'block' }}
            >
              {isAuthenticated && <Dashboard />}
              {!isAuthenticated && (
                <Button
                  variant="solid"
                  onClick={handleLogin}
                  size="sm"
                  colorScheme="yellow"
                  rounded="full"
                  isLoading={isAuthenticating}
                >
                  Connect with MetaMask
                </Button>
              )}
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                {isAuthenticated && (
                  <Box width="100%" marginTop="10px">
                    <Dashboard />
                  </Box>
                )}
                {!isAuthenticated && (
                  <Button
                    variant="solid"
                    onClick={handleLogin}
                    size="sm"
                    mr={4}
                    marginTop="10px"
                    width="100%"
                    colorScheme="yellow"
                    rounded="full"
                    isLoading={isAuthenticating}
                  >
                    Connect with MetaMask
                  </Button>
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
