import { useState } from 'react';
import Moralis from 'moralis';
import { Text, FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import ParticipateToWhitelist from '@/components/landingPage/participateToWhitelist';
import SocialsForm from '@/components/landingPage/socialsForm';

import TabsWrapper from '../tabsWrapper';

const ProfileDashboard = ({ user }: { user: Moralis.User<Moralis.Attributes> | null }) => {
  const [username, setUsername] = useState('');
  const { setUserData, isUserUpdating, logout, isAuthenticated } = useMoralis();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <TabsWrapper>
      <Button mb="5" onClick={handleLogout} colorScheme="red" size="sm">
        Disconnect
      </Button>
      <Box mb="5">
        <Text mb="5" fontSize="3xl">
          Your details
        </Text>
        <Text>
          <b>Username:</b> {user?.getUsername()}
        </Text>
        <Text>
          <b>Wallet address:</b> {user?.get('ethAddress')}
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (username.trim() !== '') {
              setUserData({ username }).then(() => setUsername(''));
            }
          }}
        >
          <FormControl mt="6" mb="6">
            <FormLabel htmlFor="username">Set a new username</FormLabel>
            <Input
              width="50%"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              placeholder="ex: baffle_me_2022"
              value={username}
            />
          </FormControl>
          <Button width="250px" disabled={isUserUpdating} colorScheme="purple" type="submit">
            change username
          </Button>
        </form>
      </Box>
      <hr />
      <Box mb="5">
        <Text mb="5" fontSize="3xl">
          Participate to whitelist
        </Text>
        <ParticipateToWhitelist />
      </Box>
      <hr />
      <Box mt="5">
        <Text mb="5" fontSize="3xl">
          Let us know about your socials
        </Text>
        <SocialsForm isAuthenticated={isAuthenticated} />
      </Box>
    </TabsWrapper>
  );
};

export default ProfileDashboard;
