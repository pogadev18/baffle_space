import { useEffect } from 'react';
import { Box } from '@chakra-ui/layout';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { addDoc } from '@firebase/firestore';

import Logo from '@/root/components/logoImage';
import RulesModal from '@/root/components//rulesModal';
import AlertComponent from '@/root/components/alert';

import { db } from '@/root/firebase/clientApp';
import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

const { Error } = AlertStatusValues;

const Header = () => {
  const [users, usersLoading] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    authError,
    user: moralisUser,
    isAuthUndefined,
  } = useMoralis();
  // const { loggedInUser } = useLoggedInUser();
  const moralisUserWalletAddress: string = !isAuthUndefined && moralisUser?.attributes?.ethAddress;
  const moralisUsernameID: string = !isAuthUndefined && moralisUser?.attributes?.username;

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Log in using Moralis',
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated && !usersLoading && users) {
      const firebaseUsers = users.docs.map((user) => user.data());
      const userAlreadyInFirestore = !!firebaseUsers.find((user) => user.uid === moralisUsernameID);

      const importUserDataInFirestore = async () => {
        await addDoc(collection(db, 'users'), {
          wallet_address: moralisUserWalletAddress,
          uid: moralisUsernameID,
        });
      };

      if (!userAlreadyInFirestore) importUserDataInFirestore();
    }
  }, [isAuthenticated, usersLoading]);

  return (
    <header>
      <Box
        padding={5}
        display="flex"
        alignItems="center"
        boxShadow="base"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="1rem" cursor="pointer">
          <Logo width="3rem" height="3rem" />
          <Heading as="h2" size="xl">
            nachos
            <Box
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                letterSpacing: '.25rem',
              }}
            >
              [marketplace]
            </Box>
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <Button colorScheme="gray" onClick={onOpen}>
            reguli
          </Button>

          {authError && (
            <AlertComponent
              status={Error}
              title="Something went wrong"
              description={authError.message}
            />
          )}

          {isAuthenticated ? (
            <p>my profile</p>
          ) : (
            <Button onClick={handleLogin} colorScheme="yellow" isLoading={isAuthenticating}>
              Autentificare cu MetaMask
            </Button>
          )}
        </Box>
      </Box>
      <RulesModal isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
