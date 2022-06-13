import { Box } from "@chakra-ui/layout";
import { Button, Heading, useDisclosure } from "@chakra-ui/react";

import Logo from "@/components/logoImage";
import RulesModal from "@/components//rulesModal";
import LoggedInDrawer from "@/components/loggedInDrawer";

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
            <Box
              sx={{
                fontSize: "1rem",
                textAlign: "center",
                letterSpacing: ".25rem",
              }}
            >
              [marketplace]
            </Box>
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <Button colorScheme="gray" onClick={onOpen}>
            reguli
          </Button>
          {/*<Button colorScheme="yellow">login</Button>*/}
          <LoggedInDrawer />
        </Box>
      </Box>
      <RulesModal isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
