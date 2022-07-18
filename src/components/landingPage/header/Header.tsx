import { ReactNode } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useMoralis } from 'react-moralis';
import { isMobile } from 'react-device-detect';

import Dashboard from '@/root/components/dashboard';
import Logo from '@/root/components/logo';
import ParticipateToWhiteListBanner from '@/root/components/landingPage/participateToWhiteListBanner';
import AlertComponent from '@/root/components/alert';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

const Links = ['Whitepaper', 'Roadmap', 'Game', 'NFTs'];

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
  <Link
    px={2}
    py={1}
    color="white"
    textTransform="uppercase"
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: 'yellow.400',
      color: 'black.900',
    }}
    href={`/${url}`}
  >
    {children}
  </Link>
);

const LandingPageHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating, authError } = useMoralis();

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Auth required by Baffle.space',
      });
    }
  };

  return (
    <>
      <ParticipateToWhiteListBanner />
      {!isAuthenticated && isMobile && (
        <AlertComponent
          status={AlertStatusValues.Info}
          title="MetaMask mobile connection"
          description="We detected that you are using a mobile device. In order to connect with MetaMask, please download the 'MetaMask' app from GooglePlay or AppStore."
        />
      )}
      {authError && (
        <AlertComponent
          status={AlertStatusValues.Error}
          title="Something went wrong"
          description={authError.message}
        />
      )}

      <Box width="100%" bg="black.900">
        <Container paddingX={{ base: '25px', md: '40px' }} maxW="8xl">
          <Flex
            h={16}
            alignItems="center"
            justifyContent={{ base: 'auto', md: 'space-between' }}
            wrap={{ base: 'wrap' }}
          >
            <IconButton
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
                  <NavLink url={link.toLowerCase()} key={link}>
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
                  // mr={4}
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
                  <NavLink url={link} key={link}>
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
