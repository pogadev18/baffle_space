import { useRef, MutableRefObject } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Avatar,
} from "@chakra-ui/react";

const LoggedInDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: MutableRefObject<any> = useRef();

  return (
    <>
      <Button variant="link" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Avatar
          cursor="pointer"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Salut, Bogdan</DrawerHeader>

          <DrawerBody>
            <Button width="100%" colorScheme="yellow">
              Buy Crypto
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LoggedInDrawer;
