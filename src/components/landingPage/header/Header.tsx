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
      <Box width="100%" bg="black.900" px={6}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Logo />
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            {isAuthenticated && <Dashboard />}
            {!isAuthenticated && (
              <Button
                variant="solid"
                onClick={handleLogin}
                size="sm"
                mr={4}
                margin="0"
                colorScheme="yellow"
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default LandingPageHeader;
