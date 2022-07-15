import { useRef } from 'react';
import { useMoralis } from 'react-moralis';

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
  Text,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import ProfileDashboard from '@/root/components/dashboard/profileDashboard';
import Nft from '@/root/components/dashboard/nft';

const DashboardDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { user } = useMoralis();

  return (
    <>
      <Button colorScheme="white" variant="ghost" ref={btnRef} onClick={onOpen} size="xl">
        <AiOutlineUser size="30" color="white" />
      </Button>

      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background="yellow.400">
          <Flex minWidth="max-content" alignItems="center" height="100%">
            <Flex
              height="100%"
              width="100%"
              background="black.900"
              flex={1}
              alignItems="center"
              justifyContent="center"
            >
              <Text>BAFFLE</Text>
            </Flex>

            <DrawerBody>
              <DrawerCloseButton />
              <DrawerHeader px="0" paddingTop="0px" paddingBottom="20px">
                <Text color="black" fontWeight="900" fontSize="3xl" textTransform="uppercase">
                  Dashboard
                </Text>
              </DrawerHeader>
              <Tabs justifyContent="center" variant="unstyled" size="lg">
                <TabList background="yellow.300">
                  <Tab textTransform="uppercase" _selected={{ fontWeight: 'black' }}>
                    Profile
                  </Tab>
                  <Tab isDisabled textTransform="uppercase" _selected={{ fontWeight: 'black' }}>
                    NFTs
                  </Tab>
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
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardDrawer;
