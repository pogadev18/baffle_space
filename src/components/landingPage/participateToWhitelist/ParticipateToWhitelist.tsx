import React, { useEffect, useState } from 'react';
import {
  Button,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import WhitelistDrawerWarning from '@/root/components/landingPage/whitelistDrawerWarning';

const ParticipateToWhitelist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [error, setError] = useState(false);
  const [notify, setNotify] = useState(false);
  const { isAuthenticated, authenticate, isAuthenticating, user, authError } = useMoralis();
  const [displayWarning, setDisplayWarning] = useState(false);

  useEffect(() => {
    if (authError) {
      setDisplayWarning(true);
    }
  }, [authError]);

  const isAlreadyOnWhitelist = user?.get('whiteList');

  const handleWhiteList = async () => {
    // add whiteList in DB for user
    try {
      await user?.save('whiteList', true);
      setNotify(true);
      onClose();
    } catch (e) {
      setError(true);
    }
  };

  const handleLogin = async () => {
    await authenticate({
      signingMessage: 'Auth required by Baffle.space',
    });
  };

  if (error) return <p>something went wrong, please refresh the page and try again</p>;

  return (
    <>
      {isAuthenticated ? (
        <Button
          background="transparent"
          color="black"
          border="1px solid black"
          rounded="full"
          py={7}
          width={{ base: '320px', md: '460px' }}
          textTransform="uppercase"
          fontSize={{ base: '15px', md: '20px' }}
          mt="25px"
          disabled={isAlreadyOnWhitelist || isAuthenticating}
          _hover={{ background: 'yellow.300' }}
          onClick={onOpen}
        >
          {isAlreadyOnWhitelist ? 'you are already on the whitelist' : 'join the nft whitelist'}
        </Button>
      ) : (
        <Button
          background="transparent"
          color="black"
          border="1px solid black"
          rounded="full"
          py={7}
          width={{ base: '350px', md: '330px' }}
          textTransform="uppercase"
          fontSize={{ base: '13px', md: '20px' }}
          mt="25px"
          disabled={isAuthenticating}
          onClick={handleLogin}
          _hover={{ background: 'yellow.300' }}
        >
          join the nft whitelist
        </Button>
      )}

      {displayWarning && (
        <WhitelistDrawerWarning setDisplayWarning={() => setDisplayWarning(false)} />
      )}

      {notify && (
        <Box
          background="#ffce86"
          fontWeight="bold"
          color="black"
          padding="5px 15px"
          borderRadius="5px"
          mt={5}
        >
          <p>Your wallet address is now whitelisted</p>
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notice</ModalHeader>
          <ModalBody>
            If you join the whitelist you won&apos;t be able to undo this action. Are you sure you
            want to join the whitelist?
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={handleWhiteList}>
              Join the whitelist
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ParticipateToWhitelist;
