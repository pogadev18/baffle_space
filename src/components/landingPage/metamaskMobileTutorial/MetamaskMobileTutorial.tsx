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

import styles from './MetamaskMobileTutorial.module.scss';

const MetamaskMobileTutorial = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        marginY="10px"
        onClick={onOpen}
        size="md"
        rounded="full"
        width={{ base: '100%', md: '80%' }}
        colorScheme="yellow"
        color="white"
        rightIcon={<FaYoutube />}
        variant="outline"
        _hover={{ background: 'transparent' }}
      >
        How to install MetaMask App
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,0.8)" />
        <ModalContent
          className={styles.mobileTutorialModal}
          alignSelf="center"
          background="black.500"
        >
          <ModalHeader color="white" textTransform="uppercase" fontWeight="300" fontSize="25px">
            &nbsp;
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/A5zvGfORLV4?autoplay=1&rel=0&showinfo=1&modestbranding=1"
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
