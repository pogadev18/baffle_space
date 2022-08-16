import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';
import { HiChevronDown } from 'react-icons/hi';

interface AlertComponentProps {
  status: AlertStatusValues;
  title: string;
  children: ReactNode;
  showIcon: boolean;
}

const AlertComponent = ({ status, title, children, showIcon }: AlertComponentProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

  return isOpen ? (
    <Alert
      background="#ffce86"
      textAlign="center"
      justifyContent="center"
      status={status}
      overflow="inherit"
    >
      {showIcon ? <AlertIcon /> : null}
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Box>
      <CloseButton alignSelf="flex-start" position="absolute" right={1} top={1} onClick={onClose} />
    </Alert>
  ) : (
    <Box height="50px" width="100%" background="#ffce86" textAlign="center">
      <Button
        id="toggle-metamask-help-text"
        _hover={{
          background: '0',
        }}
        background="0"
        fontSize="30px"
        padding="0"
        onClick={onOpen}
        rightIcon={<HiChevronDown />}
      />
    </Box>
  );
};

export default AlertComponent;
