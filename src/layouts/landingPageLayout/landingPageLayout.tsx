import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import LandingPageHeader from '@/root/components/landingPage/header';

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <Flex direction="column" align="center" m="0 auto">
      <LandingPageHeader />
      {children}
    </Flex>
  );
};

export default LandingPageLayout;
