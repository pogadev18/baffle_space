import { Box } from "@chakra-ui/layout";
import { Button, Heading, useDisclosure } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "@/components/logoImage";
import RulesModal from "@/components//rulesModal";
import AlertComponent from "@/components/alert";
import { AlertStatusValues } from "@/utils/interfaces/alertStatuses";

const { Error } = AlertStatusValues;

const Header = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, authenticate, isAuthenticating, authError } =
    useMoralis();

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: "Log in using Moralis",
      });
      router.push("/register");
    }
  };

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
                fontSize: "1rem",
                textAlign: "center",
                letterSpacing: ".25rem",
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
            <Link href="/profile">
              <a>my profile</a>
            </Link>
          ) : (
            <Button
              onClick={handleLogin}
              colorScheme="yellow"
              isLoading={isAuthenticating}
            >
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
