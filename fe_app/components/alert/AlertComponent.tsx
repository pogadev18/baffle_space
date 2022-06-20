import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';

import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

interface AlertComponentProps {
  status: AlertStatusValues;
  title: string;
  description: string;
}

const AlertComponent = ({ status, title, description }: AlertComponentProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return isOpen ? (
    <Alert status={status}>
      <AlertIcon />
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : null;
};

export default AlertComponent;
