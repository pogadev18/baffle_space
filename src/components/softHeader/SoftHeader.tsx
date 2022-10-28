import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { CloseIcon } from '@chakra-ui/icons';

import NavLink from '@/root/components/navLink';
import Logo from '@/root/components/logo';

import { renderLinksUrl } from '@/root/utils/utilityFunctions';

const Links = ['Team', 'Roadmap'];

const SoftHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="100%"
      position={{ base: 'static', lg: 'absolute' }}
      zIndex="10"
      background="transparent"
    >
      <Container
        position="relative"
        paddingBottom={{ base: '1.25rem', md: '0' }}
        paddingX={{ base: '25px', md: '40px' }}
        maxW="8xl"
      >
        <Flex
          h="90px"
          alignItems="center"
          justifyContent={{ base: 'auto', md: 'space-between' }}
          wrap={{ base: 'wrap' }}
        >
          <IconButton
            data-ismenuopen={isOpen}
            order={1}
            marginTop={{ base: 5, md: 0 }}
            // variant="outline"
            colorScheme="#00B0CA"
            borderColor="#00B0CA"
            size="md"
            icon={isOpen ? <CloseIcon color="#00B0CA" /> : <Box color="#00B0CA">menu</Box>}
            aria-label="Open Menu"
            display={{ lg: 'none' }}
            onClick={onOpen}
          />
          <HStack
            marginTop={{ base: 5, md: 0 }}
            flex={{ base: '1' }}
            spacing={8}
            alignItems="center"
          >
            <Box>
              <Logo width="60" height="60" />
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', lg: 'flex' }}>
              {Links.map((link) => (
                <NavLink url={renderLinksUrl(link)} key={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen && (
          <Drawer size="full" isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent backgroundColor="#000">
              <DrawerCloseButton color="white" size="xl" margin="15px" />
              <DrawerBody marginY="45px">
                <Stack as="nav" spacing={4}>
                  {Links.map((link) => (
                    <NavLink onClick={onClose} url={renderLinksUrl(link)} key={link}>
                      {link}
                    </NavLink>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Container>
    </Box>
  );
};

export default SoftHeader;
