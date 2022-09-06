import { ReactNode } from 'react';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

const SliderModalSkeleton = ({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <ModalContent backgroundColor="#232323" py={25}>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton color="white" />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button colorScheme="white" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default SliderModalSkeleton;
