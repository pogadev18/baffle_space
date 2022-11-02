import Moralis from 'moralis';
import { Text, Box } from '@chakra-ui/react';

import DisconnectButton from '@/root/components/disconnectButton';

import TabsWrapper from '../tabsWrapper';

const ProfileDashboard = ({ user }: { user: Moralis.User<Moralis.Attributes> | null }) => {
  return (
    <TabsWrapper>
      <Box mb="5">
        <Text>
          <span style={{ fontWeight: '900' }}>Wallet address:</span> {user?.get('ethAddress')}
        </Text>
      </Box>
      <Box mt="45" display={{ base: 'none', custom1110: 'block' }}>
        <DisconnectButton color="black" fontSize="20px" size="xl" variant="ghost" />
      </Box>
    </TabsWrapper>
  );
};

export default ProfileDashboard;
