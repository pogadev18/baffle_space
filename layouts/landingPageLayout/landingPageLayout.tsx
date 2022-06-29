import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import LandingPageHeader from '@/components/landingPage/header';

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: '1400px' }} m="0 auto">
      <LandingPageHeader />
      {children}
    </Flex>
  );
};

export default LandingPageLayout;
