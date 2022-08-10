import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface CTAsProps {
  mobileVersion: boolean;
}

const CTAs = ({ mobileVersion }: CTAsProps) => {
  const router = useRouter();

  return (
    <Stack
      alignItems="center"
      spacing={{ base: 4, sm: 6 }}
      direction={{ base: 'column', sm: 'column' }}
    >
      <Button
        onClick={() => router.push('/nfts')}
        rounded="full"
        variant="solid"
        size="lg"
        px={6}
        width={{ base: '100%', md: '80%' }}
        colorScheme="yellow"
      >
        NFTs
      </Button>
      <Button
        onClick={() => router.push('/game')}
        width={{ base: '100%', md: '80%' }}
        variant="outline"
        color="white"
        rounded="full"
        size="lg"
        fontWeight="normal"
        borderWidth="1px"
        borderColor={mobileVersion ? 'black.800' : 'white'}
        background={mobileVersion ? 'black.800' : 'transparent'}
        px={6}
        _hover={{
          textDecoration: 'none',
          bg: 'yellow.400',
          color: 'black.900',
          borderColor: 'yellow.400',
        }}
      >
        The Gameplay
      </Button>
    </Stack>
  );
};

export default CTAs;
