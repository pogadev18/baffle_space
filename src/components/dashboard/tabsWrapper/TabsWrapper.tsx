import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

const TabsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box bg="yellow.400" width="full" height="full" py="0" rounded="lg">
      {children}
    </Box>
  );
};

export default TabsWrapper;
