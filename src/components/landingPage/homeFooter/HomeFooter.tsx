import { Box, Container, Flex } from '@chakra-ui/react';

import Faqs from '@/root/components/faqs';
import SocialLinks from '@/root/components/socialLinks';

const HomeFooter = () => {
  return (
    <Box id="footer" background="black.800" width="100%" height="100%">
      <Container paddingX={{ base: '25px', md: '40px' }} maxW="8xl" py={{ base: 10, md: 10 }}>
        <Flex
          justifyContent="space-between"
          gap={{ base: 5, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box flex={2}>
            <Faqs />
          </Box>
          <Box flex={1}>
            <SocialLinks
              iconTextColor="white"
              iconsColor="white"
              titleColor="white"
              alignTitleRight
              alignIconsRight
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomeFooter;
