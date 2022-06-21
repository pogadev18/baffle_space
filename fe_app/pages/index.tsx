import { useEffect } from 'react';
import { Box } from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import { addDoc } from '@firebase/firestore';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '@/firebase/clientApp';
import AlertComponent from '@/components/alert';
import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

const { Error } = AlertStatusValues;

const Home = () => {
  const [users, usersLoading] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    authError,
    user: moralisUser,
    isAuthUndefined,
    logout,
  } = useMoralis();

  const moralisUserWalletAddress: string = !isAuthUndefined && moralisUser?.attributes?.ethAddress;
  const moralisUsernameID: string = !isAuthUndefined && moralisUser?.attributes?.username;

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

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: 'Log in using Moralis',
      });
    }
  };
  return (
    <Box width={1000} margin="auto" padding={5}>
      <Text fontSize="5xl">Baffle.space 😜</Text>
      <Box>
        <Text fontSize="3xl">
          login with metamask to have bla bla bla...access...whitelist...random text (use desktop
          version for metamask login)
        </Text>
        {isAuthenticated ? (
          <Box>
            <Button onClick={logout} colorScheme="red">
              logout
            </Button>
            <p>social media handles section</p>
          </Box>
        ) : (
          <Button onClick={handleLogin} colorScheme="yellow" isLoading={isAuthenticating}>
            Autentificare cu MetaMask
          </Button>
        )}
        {authError && (
          <AlertComponent
            status={Error}
            title="Something went wrong"
            description={authError.message}
          />
        )}
      </Box>
    </Box>
  );
};

Home.landingPage = true;

export default Home;
