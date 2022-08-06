import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

interface AlertComponentProps {
  status: AlertStatusValues;
  title: string;
  children: ReactNode;
}

const AlertComponent = ({ status, title, children }: AlertComponentProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return isOpen ? (
    <Alert status={status} overflow="inherit">
      <AlertIcon />
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Box>
      <CloseButton alignSelf="flex-start" position="absolute" right={1} top={1} onClick={onClose} />
    </Alert>
  ) : null;
};

export default AlertComponent;
