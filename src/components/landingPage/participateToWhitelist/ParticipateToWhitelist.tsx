import React, { useState } from 'react';
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
  ModalCloseButton,
} from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import AlertComponent from '@/root/components/alert';
import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

const { Success } = AlertStatusValues;

const ParticipateToWhitelist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [error, setError] = useState(false);
  const [notify, setNotify] = useState(false);
  const { isAuthenticated, authenticate, isAuthenticating, user } = useMoralis();

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

  if (error) <p>something went wrong, please refresh the page and try again</p>;

  return (
    <>
      {isAuthenticated ? (
        <Button
          background="transparent"
          color="black"
          border="1px solid black"
          rounded="full"
          py={7}
          width="450px"
          textTransform="uppercase"
          mt="25px"
          disabled={isAlreadyOnWhitelist || isAuthenticating}
          onClick={onOpen}
        >
          {isAlreadyOnWhitelist ? 'you are already on the whitelist 😍' : 'join the nft whitelist'}
        </Button>
      ) : (
        <Button
          background="transparent"
          color="black"
          border="1px solid black"
          rounded="full"
          py={7}
          width="450px"
          textTransform="uppercase"
          mt="25px"
          disabled={isAuthenticating}
          onClick={handleLogin}
        >
          connect with metamask to participate
        </Button>
      )}

      {notify && (
        <Box mt={5}>
          <AlertComponent
            status={Success}
            title="Participation completed"
            description="you are know whitelisted 😍"
          />
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please be aware of the following</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            If you join the whitelist you won&apos;t be able to undo this action. Please think twice
            before proceeding with this action
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
