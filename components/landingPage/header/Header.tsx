import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMoralis } from 'react-moralis';

import Dashboard from '@/components/dashboard';

const Links = ['dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href="#0"
  >
    {children}
  </Link>
);

const LandingPageHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating } = useMoralis();

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Auth required by Baffle.space',
      });
    }
  };

  return (
    <Box width="100%" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
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
  );
};

export default LandingPageHeader;
