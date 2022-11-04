import { useEffect, useState } from 'react';

import { Button, Text, Tooltip } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import useMetamaskAvailability from '@/root/hooks/useMetamaskAvailability';

const whitelistWinners = [process.env.NEXT_PUBLIC_WINNER_1];

const JoinNftWhiteList = () => {
  const { metamaskAvailable } = useMetamaskAvailability();
  const { isAuthenticated, authenticate, user, isInitialized } = useMoralis();
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  const [addedWithSuccess, setAddedWithSuccess] = useState(false);
  const [whiteListError, setWhiteListError] = useState(false);
  const [isUserAWinner, setIsUserAWinner] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      setIsWhiteListed(user.get('whiteList'));
    }
  }, [isAuthenticated, user]);

  const handleWhiteList = async () => {
    try {
      await user?.save('whiteList', true);
      setAddedWithSuccess(true);
    } catch (e) {
      setAddedWithSuccess(false);
      setWhiteListError(true);
    }
  };

  useEffect(() => {
    if (isInitialized) {
      if (user) {
        const userAddress = user.get('ethAddress');

        const winner = !!whitelistWinners.find((address) => address?.toLowerCase() === userAddress);
        setIsUserAWinner(winner);
      }
    }
  }, [user, isAuthenticated, isInitialized]);

  const buttonText = () => {
    if (isWhiteListed || addedWithSuccess) return 'Congrats! You are whitelisted';
    return 'Join the NFTs Whitelist';
  };

  if (whiteListError) return <Text color="red">please try again, something went wrong</Text>;

  if (!isAuthenticated)
    return (
      <Tooltip
        hasArrow
        label={!metamaskAvailable ? 'Install MetaMask to connect' : ''}
        bg="red.600"
      >
        <Button
          size="md"
          rounded="xl"
          paddingY="30px"
          backgroundColor="#00B0CA"
          color="white"
          onClick={() => authenticate()}
          _hover={{ background: '#047687' }}
        >
          Connect to Join the NFTs Whitelist
        </Button>
      </Tooltip>
    );

  return (
    <div>
      {isUserAWinner ? (
        <Button
          disabled={isWhiteListed || addedWithSuccess}
          size="md"
          rounded="xl"
          paddingY="30px"
          backgroundColor="#00B0CA"
          color="white"
          _disabled={{ opacity: '0.7', cursor: 'not-allowed' }}
          onClick={handleWhiteList}
          _hover={{ background: '#047687' }}
        >
          {buttonText()}
        </Button>
      ) : (
        <Text
          color="white"
          border="1px solid white"
          padding="5px"
          width="400px"
          paddingY="30px"
          margin="auto"
          rounded="5px"
        >
          Whitelist Not Open for Public, Yet!
        </Text>
      )}
    </div>
  );
};

export default JoinNftWhiteList;
