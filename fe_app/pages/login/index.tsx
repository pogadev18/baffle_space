// import { useEffect, useState } from "react";
// import { Box, Stack } from "@chakra-ui/layout";
// import {
//   Button,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Input,
// } from "@chakra-ui/react";
// import { useMoralis } from "react-moralis";
//
// import { useRouter } from "next/router";
//
// import AlertComponent from "@/components/alert";
// import MoralisLoginOrSignup from "@/components/moralisLoginOrSignup";
//
const LoginPage = () => {
  //   const { authenticate, isAuthenticated, isAuthenticating, authError, user } =
  //     useMoralis();
  //   const router = useRouter();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [email, setEmail] = useState("");
  //
  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       router.push("/");
  //     }
  //   }, [isAuthenticated]);
  //
  //   // if error when creating account, close modal
  //   useEffect(() => {
  //     if (authError) {
  //       onClose();
  //     }
  //   }, [authError]);
  //
  //   console.log(user?.attributes);
  //
  return (
    <p>hello</p>
    //     <Box textAlign="center" width={500} margin="auto">
    //       <Stack spacing={5}>
    //         <Box mt={38}>
    //           <Input
    //             type="email"
    //             placeholder="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           <Button
    //             onClick={login}
    //             colorScheme="yellow"
    //             isLoading={isAuthenticating}
    //           >
    //             Autentificare cu MetaMask
    //           </Button>
    //         </Box>
    //         {/*<Box>*/}
    //         {/*  <MoralisLoginOrSignup isLogin />*/}
    //         {/*</Box>*/}
    //         <Box>
    //           <Button
    //             onClick={onOpen}
    //             color="black"
    //             textDecoration="underline"
    //             variant="link"
    //           >
    //             Creează-ți cont
    //           </Button>
    //         </Box>
    //         {authError && (
    //           <AlertComponent
    //             status={Error}
    //             title="Something went wrong"
    //             description={authError.message}
    //           />
    //         )}
    //       </Stack>
    //       <Modal isOpen={isOpen} onClose={onClose}>
    //         <ModalOverlay />
    //         <ModalContent>
    //           <ModalHeader>Creează un cont nou</ModalHeader>
    //           <ModalCloseButton />
    //           <ModalBody>
    //             <MoralisLoginOrSignup isLogin={false} />
    //           </ModalBody>
    //         </ModalContent>
    //       </Modal>
    //     </Box>
  );
};
//
export default LoginPage;
