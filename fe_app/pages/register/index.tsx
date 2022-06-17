import { useEffect, useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import { addDoc } from "@firebase/firestore";
import { Button, Input, Text } from "@chakra-ui/react";
import { Box, Stack } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

import useReadFirebaseUsers from "@/hooks/useReadFirebaseUsers";
import LoadingSpinner from "@/components/LoadingSpinner";

// import { useAppDispatch } from "@/store/hook";
// import { confirmIsOnRegisterProcess } from "@/store/slices/registerProcessSlice";

import {
  RegisterFormValues,
  initialValues,
  validationSchema,
  notify,
} from "./utils";
import Link from "next/link";

const Register = () => {
  const { user: moralisUser, isAuthUndefined } = useMoralis();
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(true);
  // const dispatch = useAppDispatch();
  const { firebaseUsers, usersCollectionRef } = useReadFirebaseUsers();

  const moralisUserWalletAddress: string =
    !isAuthUndefined && moralisUser?.attributes?.ethAddress;

  const moralisUsernameID: string =
    !isAuthUndefined && moralisUser?.attributes?.username;

  useEffect(() => {
    if (!isAuthUndefined) {
      const isUserWalletInFirebase = firebaseUsers?.find(
        (user) => user.wallet_address === moralisUserWalletAddress
      );

      if (isUserWalletInFirebase) {
        router.push("/");
      } else {
        // set a flag on local storage if the user is coming from this page
        // dispatch(confirmIsOnRegisterProcess());
        setIsPageLoading(false);
      }
    }
  }, [isAuthUndefined, moralisUserWalletAddress]);

  const handleSubmit = async (values: RegisterFormValues) => {
    const { email } = values;

    addDoc(usersCollectionRef, {
      wallet_address: moralisUserWalletAddress,
      email,
      uid: moralisUsernameID,
    });
    router.push("/");
    notify();
  };

  return isPageLoading ? (
    <LoadingSpinner />
  ) : (
    <Box width={500} margin="auto">
      <Text fontSize="2xl" mt={10} mb={5}>
        Acum că te-ai logat cu MetaMask, mai avem nevoie de email-ul tău pentru
        a te ține la curent cu statusul tombolei.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<RegisterFormValues>) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;
          return (
            <Form>
              <Stack spacing={30}>
                <Box>
                  <Input
                    name="email"
                    id="email"
                    variant="flushed"
                    size="md"
                    type="text"
                    placeholder="Email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!(errors.email && touched.email)}
                  />
                  {errors.email && touched.email && (
                    <Text color="red" fontSize="sm">
                      {errors.email}
                    </Text>
                  )}
                </Box>

                <Button
                  colorScheme="yellow"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Continuă
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

Register.specialLayout = true;

export default Register;
