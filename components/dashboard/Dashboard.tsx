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
import { AiOutlineUser } from 'react-icons/ai';

import ProfileDashboard from '@/components/dashboard/profileDashboard';
import Nft from '@/components/dashboard/nft';
import { useMoralis } from 'react-moralis';

const DashboardDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { user } = useMoralis();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} size="xl">
        <AiOutlineUser size="30" />
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
                <Tab>NFTs</Tab>
              </TabList>

              <TabPanels>
                <TabPanel p="0" mt="5">
                  <ProfileDashboard user={user} />
                </TabPanel>
                <TabPanel p="0" mt="5">
                  <Nft user={user} />
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
