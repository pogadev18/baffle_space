import { useRef } from 'react';
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import ProfileDashboard from '@/components/dashboard/profileDashboard';
import { useMoralis } from 'react-moralis';

const DashboardDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { user } = useMoralis();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer size="xl" isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome to your dashboard</DrawerHeader>

          <DrawerBody>
            <Tabs variant="enclosed" size="lg">
              <TabList>
                <Tab>Profile</Tab>
                <Tab>Balance</Tab>
                <Tab>Transactions</Tab>
                <Tab>NFTs</Tab>
                <Tab>Send ETH</Tab>
              </TabList>

              <TabPanels>
                <TabPanel p="0" mt="5">
                  <ProfileDashboard user={user} />
                </TabPanel>
                <TabPanel p="0" mt="5">
                  <p>balance tab</p>
                </TabPanel>
                <TabPanel p="0" mt="5">
                  <p>transactions tab</p>
                </TabPanel>
                <TabPanel p="0" mt="5">
                  <p>nfts tab</p>
                </TabPanel>
                <TabPanel p="0" mt="5">
                  <p>send eth tab</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardDrawer;
