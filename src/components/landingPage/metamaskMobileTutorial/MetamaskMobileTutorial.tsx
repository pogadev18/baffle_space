import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const MetamaskMobileTutorial = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        marginY="10px"
        onClick={onOpen}
        size="sm"
        rounded="full"
        width={{ base: '100%', md: '80%' }}
        colorScheme="yellow"
        color="white"
        rightIcon={<FaYoutube />}
        variant="outline"
      >
        How to install MetaMask App
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> How to install MetaMask on Mobile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5Roj5rT2wWA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MetamaskMobileTutorial;
