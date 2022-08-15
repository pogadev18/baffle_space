import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

interface AlertComponentProps {
  status: AlertStatusValues;
  title: string;
  children: ReactNode;
  showIcon: boolean;
}

const AlertComponent = ({ status, title, children, showIcon }: AlertComponentProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return isOpen ? (
    <Alert textAlign="center" justifyContent="center" status={status} overflow="inherit">
      {showIcon ? <AlertIcon /> : null}
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Box>
      <CloseButton alignSelf="flex-start" position="absolute" right={1} top={1} onClick={onClose} />
    </Alert>
  ) : null;
};

export default AlertComponent;
