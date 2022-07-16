import { useState } from 'react';
import Moralis from 'moralis';
import { Flex, Text, FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import SocialsForm from '@/root/components/landingPage/socialsForm';
import DisconnectButton from '@/root/components/disconnectButton';

import TabsWrapper from '../tabsWrapper';

const ProfileDashboard = ({ user }: { user: Moralis.User<Moralis.Attributes> | null }) => {
  const [username, setUsername] = useState('');
  const { setUserData, isUserUpdating, isAuthenticated } = useMoralis();

  return (
    <TabsWrapper>
      <Box mb="5">
        <Text>
          <span style={{ fontWeight: '900' }}>Username:</span> {user?.getUsername()}
        </Text>
        <Text>
          <span style={{ fontWeight: '900' }}>Wallet address:</span> {user?.get('ethAddress')}
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
            <FormLabel htmlFor="username" fontWeight="900">
              Set a new username
            </FormLabel>
            <Flex
              gap={2}
              justify={{ base: 'flexStart', md: 'center' }}
              align={{ base: 'flexStart', md: 'center' }}
              justifyContent="flex-start"
              direction={{ base: 'column', md: 'row' }}
            >
              <Input
                color="black"
                width="300px"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                type="text"
                placeholder="ex: baffle_me_2022"
                _placeholder={{
                  color: 'gray.300',
                }}
                value={username}
              />
              <Button
                width="150px"
                disabled={isUserUpdating}
                colorScheme="black"
                variant="outline"
                type="submit"
                _hover={{ background: 'white' }}
              >
                change
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
      <Box mt="5">
        <Text fontWeight="900" mb="5" fontSize="3xl" color="black">
          Let us know about your socials
        </Text>
        <SocialsForm isAuthenticated={isAuthenticated} />
      </Box>
      <Box mt="45" textAlign="center" display={{ base: 'none', custom1110: 'block' }}>
        <DisconnectButton fontSize="25px" size="xl" variant="ghost" />
      </Box>
    </TabsWrapper>
  );
};

export default ProfileDashboard;
