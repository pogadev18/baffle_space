import { Container, Box } from '@chakra-ui/react';

import CTAs from './CTAs';
import HeroText from './HeroText';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Box className={styles.heroWrapper} width="100%">
      <Container
        display={{ base: 'block', lg: 'flex' }}
        height="100vh"
        maxW="8xl"
        position="relative"
        paddingX={{ base: '0px', lg: '40px' }}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'auto', lg: 'flex-end' }}
        >
          <Box
            padding={{ base: '0 25px', lg: '0' }}
            position={{ base: 'absolute', lg: 'static' }}
            bottom="45px"
          >
            <HeroText />
            <Box marginTop="40px">
              <CTAs />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
