import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMoralis } from 'react-moralis';
import { toast } from 'react-toastify';

import Dashboard from '@/root/components/dashboard';
import Logo from '@/root/components/logo';
import ParticipateToWhiteListBanner from '@/root/components/landingPage/participateToWhiteListBanner';

const Links = ['Whitepaper', 'Roadmap', 'Game', 'NFTs'];

const NavLink = ({ children }: { children: ReactNode }) => (
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
    href="Header#0"
  >
    {children}
  </Link>
);

const LandingPageHeader = () => {
  const notifyLoggedIn = () =>
    toast(
      'Now that you are logged in you can access your dashboard from the navigation bar (user icon)',
    );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating } = useMoralis();

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Auth required by Baffle.space',
      });

      notifyLoggedIn();
    }
  };

  return (
    <>
      <ParticipateToWhiteListBanner />
      <Box width="100%" bg="black.900">
        <Container maxW="8xl">
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
              colorScheme="yellow"
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
              <Box marginLeft={{ base: 5, md: 0 }}>
                <Logo />
              </Box>
              <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex
              marginTop={{ base: 15, md: 0 }}
              // flexBasis={{ base: '100%', sm: '100%', md: 'auto' }}
              alignItems="center"
              display={{ base: 'none', md: 'block' }}
            >
              {isAuthenticated && <Dashboard />}
              {!isAuthenticated && (
                <Button
                  variant="solid"
                  onClick={handleLogin}
                  size="sm"
                  mr={4}
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
                  <NavLink key={link}>{link}</NavLink>
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
