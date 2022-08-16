import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
import { METAMASK_APP_URL } from '@/root/constants';

interface WhitelistDrawerWarningProps {
  setDisplayWarning: () => void;
}

const WhitelistDrawerWarning = ({ setDisplayWarning }: WhitelistDrawerWarningProps) => {
  return (
    <Box
      position={{ base: 'relative', md: 'fixed' }}
      width={{ base: '90%', lg: 'auto' }}
      bottom={{ base: '0', md: '20px' }}
      background="#ffce86"
      color="black"
      padding="30px 15px 15px 15px"
      borderRadius="5px"
      marginY="10px"
    >
      <Button
        _hover={{ background: '0' }}
        padding="0"
        margin="0"
        position="absolute"
        top="0"
        right="0"
        variant="ghost"
        onClick={setDisplayWarning}
      >
        <FaTimes />
      </Button>
      To join the nft whitelist,&nbsp;
      {!isMobile ? (
        <>
          <a style={{ textDecoration: 'underline' }} href={METAMASK_APP_URL}>
            <strong>add the metamask extension </strong>
          </a>
          &nbsp;to your browser
        </>
      ) : (
        <a href={METAMASK_APP_URL}>
          <strong>enter from metamask</strong>
        </a>
      )}
    </Box>
  );
};

export default WhitelistDrawerWarning;
