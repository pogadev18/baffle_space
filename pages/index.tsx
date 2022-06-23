import { useEffect } from 'react';
import { Box } from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { isMobile } from 'react-device-detect';

import { db, getCloudFunctions, httpsCallableFunctions } from '@/firebase/clientApp';

import AlertComponent from '@/components/alert';
import SocialsForm from '@/components/landingPage/socialsForm';
import ParticipateToWhitelist from '@/components/landingPage/participateToWhitelist';

import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

const { Error, Info } = AlertStatusValues;

const Home = () => {
  const [users, usersLoading] = useCollection(collection(db, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const cloudFunctions = getCloudFunctions();

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
          createdAt: serverTimestamp(),
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

  const handleLogout = async () => {
    await logout();
  };

  const handleSayHello = async () => {
    const sayHello = httpsCallableFunctions(cloudFunctions, 'sayHello');
    const data = await sayHello();
    console.log(data);
  };

  return (
    <Box width="80vw" margin="auto" padding={5}>
      <Text fontSize="5xl">Baffle.space 😜</Text>
      <Box>
        <button type="button" onClick={handleSayHello}>
          say hello
        </button>
        <Text fontSize="3xl">
          loginzz with metamask to have bla bla bla...access...whitelist...random text (use desktop
          version for metamask login)
        </Text>
        {!isAuthenticated && (
          <>
            <Button onClick={handleLogin} colorScheme="yellow" isLoading={isAuthenticating}>
              Connect with MetaMask
            </Button>
            {isMobile && (
              <AlertComponent
                status={Info}
                title="MetaMask mobile connection"
                description="We detected that you are using a mobile device. In order to connect with MetaMask, please download the 'MetaMask' app from GooglePlay or AppStore."
              />
            )}
          </>
        )}
        {isAuthenticated && (
          <>
            <Button onClick={handleLogout} colorScheme="red">
              logout
            </Button>
            <ParticipateToWhitelist />
          </>
        )}
        {isAuthenticated && <SocialsForm isAuthenticated={isAuthenticated} />}

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
