import { ReactNode } from "react";
import { Box } from "@chakra-ui/layout";

import Header from "@/components/header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box width="100vw" height="100vh">
      <Header />
      <Box p={5}>{children}</Box>
    </Box>
  );
};

export default AppLayout;
