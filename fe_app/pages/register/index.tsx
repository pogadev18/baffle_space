import { useEffect } from "react";
import { Formik, Form, FormikProps } from "formik";
import { addDoc } from "@firebase/firestore";
import { Button, Input, Text, Spinner } from "@chakra-ui/react";
import { Box, Stack } from "@chakra-ui/layout";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

import useReadFirebaseUsers from "@/hooks/useReadFirebaseUsers";

import {
  RegisterFormValues,
  initialValues,
  validationSchema,
  notify,
} from "./utils";

const Register = () => {
  const { user: moralisUser, isAuthUndefined } = useMoralis();
  const router = useRouter();
  const moralisUserWalletAddress: string =
    !isAuthUndefined && moralisUser?.attributes?.ethAddress;
  const { firebaseUsers, usersCollectionRef } = useReadFirebaseUsers();

  useEffect(() => {
    if (!isAuthUndefined) {
      const isUserWalletInFirebase = firebaseUsers?.find(
        (user) => user.wallet_address === moralisUserWalletAddress
      );

      if (isUserWalletInFirebase) {
        router.push("/");
        return;
      }
    }
  }, [isAuthUndefined, moralisUserWalletAddress, firebaseUsers]);

  const handleSubmit = async (values: RegisterFormValues) => {
    const { email } = values;

    addDoc(usersCollectionRef, {
      wallet_address: moralisUserWalletAddress,
      email,
    });
    router.push("/");
    notify();
  };

  if (!isAuthUndefined)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
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
