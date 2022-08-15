import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FaVideo } from 'react-icons/fa';

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
          size="lg"
          px={6}
          width={{ base: '100%', md: '80%' }}
          colorScheme="yellow"
          rightIcon={<FaVideo />}
        >
          Find Out More
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Baffle Space</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/q5jEY92Amgw?controls=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalBody>

          <ModalFooter>
            <Button margin="0" padding="0" variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CTAs;
