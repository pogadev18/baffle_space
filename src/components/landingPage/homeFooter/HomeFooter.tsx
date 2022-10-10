import { Box, Container, Flex, Text } from '@chakra-ui/react';

import Faqs from '@/root/components/faqs';
import LogoWhite from '@/root/components/logoWhite';
import { FollowUs } from '@/root/components/landingPage/infoTexts/InfoTexts';

import styles from './HomeFooter.module.scss';

const HomeFooter = () => {
  return (
    <Box borderTop="1px solid #0070A2" id="footer" width="100%" height="100%">
      <Container paddingX={{ base: '25px', md: '40px' }} maxW="8xl" py={{ base: 10, md: 10 }}>
        <Flex
          justifyContent="space-between"
          gap={{ base: 5, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box flex={1}>
            <Faqs />
          </Box>
          <Box flex={1}>
            <section className={styles.logoWrapper}>
              <LogoWhite />
            </section>

            <Text color="white" textAlign={{ base: 'center', md: 'right' }} marginTop="20px">
              &copy; Baffle Space 2022
            </Text>
            <Box className={styles.footerSocials}>
              <FollowUs alignX="flexEnd" />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomeFooter;
