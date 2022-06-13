import { Box } from "@chakra-ui/layout";
import { Avatar, Button, Heading, useDisclosure } from "@chakra-ui/react";

import Logo from "@/components/logoImage";
import RulesModal from "@/components//rulesModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Box
        padding={5}
        display="flex"
        alignItems="center"
        boxShadow="base"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="1rem" cursor="pointer">
          <Logo width="3rem" height="3rem" />
          <Heading as="h2" size="xl">
            NACHOS
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <Button colorScheme="gray" onClick={onOpen}>
            reguli de joc
          </Button>
          {/*<Button colorScheme="yellow">login</Button>*/}
          <Avatar
            cursor="pointer"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
        </Box>
      </Box>
      <RulesModal isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
