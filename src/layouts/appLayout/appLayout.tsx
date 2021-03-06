import { ReactNode } from 'react';
import { Box } from '@chakra-ui/layout';

import LandingPageHeader from '@/root/components/landingPage/header';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box height="100vh">
      <LandingPageHeader />
      <Box p={5}>{children}</Box>
    </Box>
  );
};

export default AppLayout;
