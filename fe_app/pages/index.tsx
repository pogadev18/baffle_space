import { useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { Button, Text, Input } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import { addDoc } from '@firebase/firestore';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Formik, Form, FormikProps } from 'formik';

import { db } from '@/firebase/clientApp';
import AlertComponent from '@/components/alert';
import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';
import { SocialsFormValues, socialsInitialValues, validationSchema } from '@/utils/landingPage';

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

  const handleSocialsSubmit = (values: SocialsFormValues) => {
    console.log(values);
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
            <Formik
              initialValues={socialsInitialValues}
              validationSchema={validationSchema}
              onSubmit={handleSocialsSubmit}
            >
              {(props: FormikProps<SocialsFormValues>) => {
                const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
                return (
                  <Form>
                    <Stack spacing={30}>
                      <Box>
                        <Input
                          name="instagram"
                          id="instagram"
                          variant="flushed"
                          size="md"
                          type="text"
                          placeholder="Instagram handle"
                          onBlur={handleBlur}
                          value={values.instagram}
                          onChange={handleChange}
                          isInvalid={!!(errors.instagram && touched.instagram)}
                        />
                      </Box>
                      <Box>
                        <Input
                          name="facebook"
                          id="facebook"
                          variant="flushed"
                          size="md"
                          type="text"
                          placeholder="Facebook profile"
                          onBlur={handleBlur}
                          value={values.facebook}
                          onChange={handleChange}
                          isInvalid={!!(errors.facebook && touched.facebook)}
                        />
                      </Box>
                      <Box>
                        <Input
                          name="tiktok"
                          id="tiktok"
                          variant="flushed"
                          size="md"
                          type="text"
                          placeholder="Tiktok profile"
                          onBlur={handleBlur}
                          value={values.tiktok}
                          onChange={handleChange}
                          isInvalid={!!(errors.tiktok && touched.tiktok)}
                        />
                      </Box>
                      <Box>
                        <Input
                          name="twitter"
                          id="twitter"
                          variant="flushed"
                          size="md"
                          type="text"
                          placeholder="Twitter profile"
                          onBlur={handleBlur}
                          value={values.twitter}
                          onChange={handleChange}
                          isInvalid={!!(errors.twitter && touched.twitter)}
                        />
                      </Box>
                    </Stack>
                    <Button colorScheme="yellow" type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        ) : (
          <Button onClick={handleLogin} colorScheme="yellow" isLoading={isAuthenticating}>
            Connect with MetaMask
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
