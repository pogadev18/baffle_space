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
  Box,
  Show,
  Divider,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import ProfileDashboard from '@/root/components/dashboard/profileDashboard';
import Nft from '@/root/components/dashboard/nft';
import DisconnectButton from '@/root/components/disconnectButton';

const DashboardDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { user } = useMoralis();

  return (
    <>
      <Button
        colorScheme="white"
        color="white"
        variant="ghost"
        ref={btnRef}
        onClick={onOpen}
        size="xl"
      >
        <AiOutlineUser size="30" color="white" /> Your dashboard
      </Button>
      <Divider paddingBottom="5px" display={{ base: 'block', sm: 'none' }} />

      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background="yellow.400">
          <Box
            display={{ base: 'block', custom1110: 'flex' }}
            // alignItems="center"
            height="100%"
            overflowY="auto"
            position="relative"
          >
            <Show breakpoint="(min-width: 1110px)">
              <Flex
                height="100%"
                width="100%"
                background="black.900"
                flex={2}
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box width="700px">
                  <Text
                    display="flex"
                    alignItems="center"
                    color="gray.300"
                    fontWeight="black"
                    fontSize="100px"
                    marginBottom="20px"
                  >
                    BAFFLE SPACE
                  </Text>
                  <Text
                    position="relative"
                    bottom="40px"
                    color="gray.300"
                    textTransform="uppercase"
                    fontWeight="black"
                    fontSize="22px"
                  >
                    Raffles for dreams and baffling wins!
                  </Text>
                </Box>
              </Flex>
            </Show>
            <DrawerBody>
              <DrawerCloseButton
                fontSize={{ base: '20px', md: '30px' }}
                margin="10px"
                color="black"
              />
              <DrawerHeader px="0" paddingTop="80px" paddingBottom="20px">
                <Text color="black" fontWeight="900" fontSize="3xl" textTransform="uppercase">
                  Dashboard
                </Text>
                <Box mt="20px" display={{ base: 'block', custom1110: 'none' }}>
                  <DisconnectButton
                    borderColor="black"
                    size="sm"
                    variant="outline"
                    fontSize="15px"
                  />
                </Box>
              </DrawerHeader>
              <Tabs justifyContent="center" variant="unstyled" size="lg">
                <TabList background="yellow.300">
                  <Tab textTransform="uppercase" _selected={{ fontWeight: 'black' }}>
                    Account
                  </Tab>
                  <Tab isDisabled textTransform="uppercase" _selected={{ fontWeight: 'black' }}>
                    my NFTs
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
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardDrawer;
