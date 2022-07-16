import React from 'react';
import { Button } from '@chakra-ui/react';
import { HiLogout } from 'react-icons/hi';
import { useMoralis } from 'react-moralis';

interface IDisconnectButtonProps {
  fontSize: string;
  size: string;
  [x: string]: any;
}

const DisconnectButton = ({ fontSize, size, variant, ...other }: IDisconnectButtonProps) => {
  const { logout } = useMoralis();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Button
      {...other}
      onClick={handleLogout}
      variant={variant}
      size={size}
      color="black"
      fontWeight="900"
      fontSize={fontSize}
      textTransform="uppercase"
      _hover={{ background: '0' }}
      rightIcon={<HiLogout />}
    >
      Disconnect
    </Button>
  );
};

export default DisconnectButton;
