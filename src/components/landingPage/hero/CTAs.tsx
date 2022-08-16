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
          colorScheme="yellow"
          rightIcon={<FaYoutube />}
        >
          Find Out More
        </Button>
      </Stack>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More about BAFFLE.SPACE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Mxq0cY8Nxv4?autoplay=1&rel=0&showinfo=1&modestbranding=1"
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
