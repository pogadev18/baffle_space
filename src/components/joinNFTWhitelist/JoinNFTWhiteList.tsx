import { useEffect, useState } from 'react';

import { Button, Text } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

const whitelistWinners = ['0xac9867c66a6088651ce01edda608cadc0f2273eb333'];

const JoinNftWhiteList = () => {
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
        const winner = !!whitelistWinners.find((address) => address === userAddress);
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
      <Button
        size="md"
        rounded="xl"
        marginRight="20px"
        backgroundColor="#00B0CA"
        color="white"
        onClick={() => authenticate()}
        _hover={{ background: '#047687' }}
      >
        Connect to Join the NFTs Whitelist
      </Button>
    );

  return (
    <div>
      {isUserAWinner ? (
        <Button
          disabled={isWhiteListed || addedWithSuccess}
          size="md"
          rounded="xl"
          marginRight="20px"
          backgroundColor="#00B0CA"
          color="white"
          onClick={handleWhiteList}
          _hover={{ background: '#047687' }}
        >
          {buttonText()}
        </Button>
      ) : (
        <p>whitelist not open to the public yet!</p>
      )}
    </div>
  );
};

export default JoinNftWhiteList;
