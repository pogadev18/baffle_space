import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RulesModal = ({ isOpen, onClose }: RulesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reguli NACHOS</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem consequuntur
          cupiditate earum eligendi et expedita id obcaecati officiis porro possimus, praesentium
          quod reprehenderit repudiandae sint totam vitae! Animi, ullam.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            inchide
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RulesModal;
