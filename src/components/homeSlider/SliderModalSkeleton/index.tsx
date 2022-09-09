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

interface ISliderModalSkeletonProps {
  title: string;
  subtitle: string;
  bgColor?: string;
  headerTextColor?: string;
  closeModalColor?: string;
  children: ReactNode;
  onClose: () => void;
}

const SliderModalSkeleton = ({
  title,
  subtitle,
  children,
  onClose,
  bgColor,
  headerTextColor,
  closeModalColor,
}: ISliderModalSkeletonProps) => {
  return (
    <ModalContent backgroundColor={bgColor} py={25}>
      <ModalHeader
        color={headerTextColor}
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
      <ModalCloseButton color={closeModalColor} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button colorScheme={closeModalColor} mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

SliderModalSkeleton.defaultProps = {
  bgColor: '#232323',
  headerTextColor: '#fff',
  closeModalColor: 'white',
};

export default SliderModalSkeleton;
