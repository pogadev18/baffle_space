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
import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';

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
      borderRadius="10px"
      position={{ base: 'relative', md: 'absolute' }}
      backgroundColor="#242424"
      textAlign="center"
      justifyContent="center"
      left="0"
      right="0"
      status={status}
      overflow="inherit"
      width={{ base: 'auto', md: '700px' }}
      marginX="auto"
      marginY="40px"
      color="white"
    >
      {showIcon ? <AlertIcon /> : null}
      <Box>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Box>
      <CloseButton alignSelf="flex-start" position="absolute" right={1} top={1} onClick={onClose} />
    </Alert>
  ) : (
    <Box
      borderRadius="10px"
      position={{ base: 'relative', md: 'absolute' }}
      width={{ base: '250px', md: '250px' }}
      left="0"
      right="0"
      marginX="auto"
      marginY="40px"
      backgroundColor="#242424"
      textAlign="center"
    >
      <Button
        id="toggle-metamask-help-text"
        _hover={{
          background: '0',
        }}
        background="0"
        color="white"
        fontSize="15px"
        padding="0"
        onClick={onOpen}
        rightIcon={<HiChevronDown />}
      >
        {isMobile ? 'how to get access' : 'how to connect'}
      </Button>
    </Box>
  );
};

export default AlertComponent;
