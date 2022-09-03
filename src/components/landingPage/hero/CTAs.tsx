import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FaYoutube } from 'react-icons/fa';

import styles from './Hero.module.scss';

const CTAs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        alignItems="center"
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'column' }}
      >
        <Button
          onClick={onOpen}
          rounded="full"
          variant="solid"
          size={{ base: 'md', lg: 'lg' }}
          px={6}
          marginTop={{ base: 3, lg: 0 }}
          width={{ base: '100%', md: '400px' }}
          backgroundColor="pink.900"
          color="white"
          _hover={{
            backgroundColor: 'pink.800',
          }}
          rightIcon={<FaYoutube />}
        >
          Play Intro Video
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,0.8)" />
        <ModalContent
          background="black.500"
          className={styles.moreAboutBaffleModal}
          h={{ base: '400px', md: '600px' }}
          maxW="800px"
        >
          <ModalHeader color="white" textTransform="uppercase" fontWeight="300" fontSize="25px">
            &nbsp;
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DoxTvWq6W-Y?autoplay=1&rel=0&showinfo=1&modestbranding=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CTAs;
