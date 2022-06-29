import { ReactNode, useEffect } from 'react';
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
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import Dashboard from '@/components/dashboard';

import { db } from '@/firebase/clientApp';

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
  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    user: moralisUser,
    isAuthUndefined,
    logout,
  } = useMoralis();
  const [users, usersLoading] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const moralisUsernameID: string = !isAuthUndefined && moralisUser?.attributes?.username;

  useEffect(() => {
    if (isAuthenticated && !usersLoading && users) {
      const firebaseUsers = users.docs.map((user) => user.data());
      const userAlreadyInFirestore = !!firebaseUsers.find((user) => user.uid === moralisUsernameID);

      const importUserDataInFirestore = async () => {
        await addDoc(collection(db, 'users'), {
          uid: moralisUsernameID,
          createdAt: serverTimestamp(),
        });
      };

      if (!userAlreadyInFirestore) importUserDataInFirestore();
    }
  }, [isAuthenticated, usersLoading]);

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Auth required by Baffle.space',
      });
    }
  };

  const handleLogout = async () => {
    await logout();
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
          {isAuthenticated ? (
            <>
              <Button variant="link" onClick={handleLogout} colorScheme="red" size="sm">
                Disconnect
              </Button>
              <Dashboard />
            </>
          ) : (
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
