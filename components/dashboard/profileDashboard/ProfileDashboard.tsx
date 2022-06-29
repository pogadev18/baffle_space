import React from 'react';
import Moralis from 'moralis';
import { Text } from '@chakra-ui/react';

import TabsWrapper from '../tabsWrapper';

const ProfileDashboard = ({ user }: { user: Moralis.User<Moralis.Attributes> | null }) => {
  console.log(user);
  return (
    <TabsWrapper>
      <Text>
        <b>Username:</b> {user?.getUsername()}
      </Text>
      <Text>
        <b>Wallet address:</b> {user?.get('ethAddress')}
      </Text>
    </TabsWrapper>
  );
};

export default ProfileDashboard;
