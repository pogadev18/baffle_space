import { Box, Stack } from "@chakra-ui/layout";
import { Heading, Button, Divider } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

import AlertComponent from "@/components/alert";
import MoralisSignUp from "@/components/moralisSignUp";
import { AlertStatusValues } from "@/utils/interfaces/alertStatuses";

const { Error } = AlertStatusValues;

const LoginPage = () => {
  const { authenticate, isAuthenticated, isAuthenticating, authError } =
    useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" });
    }
  };
  return (
    <Box textAlign="center" width={500} margin="auto">
      <Heading as="h1" mb={30}>
        Login
      </Heading>

      <Stack spacing={5}>
        <Box>
          <Button
            onClick={login}
            colorScheme="yellow"
            isLoading={isAuthenticating}
          >
            Autentificare cu MetaMask
          </Button>
          {authError && (
            <AlertComponent
              status={Error}
              title="Authentication failed"
              description={authError.message}
            />
          )}
        </Box>
        <Box>
          <MoralisSignUp />
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;
