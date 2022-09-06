import { ReactNode } from 'react';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react';

const SliderModalSkeleton = ({
  title,
  subtitle,
  children,
  onClose,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <ModalContent backgroundColor="#232323" py={25}>
      <ModalHeader
        color="#ccc"
        lineHeight="50px"
        textTransform="uppercase"
        fontSize="40px"
        fontWeight={900}
      >
        {title}
        <Text
          marginY="20px"
          lineHeight="25px"
          fontSize={{ base: '15px', md: '18px' }}
          textTransform="capitalize"
          fontWeight="400"
        >
          {subtitle}
        </Text>
      </ModalHeader>
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
