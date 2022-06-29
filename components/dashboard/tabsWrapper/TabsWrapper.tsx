import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

const TabsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box bg="white" width="full" height="full" px="5" py="10" rounded="lg" shadow="lg">
      {children}
    </Box>
  );
};

export default TabsWrapper;
