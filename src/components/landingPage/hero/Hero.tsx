import { Container, Box, Image } from '@chakra-ui/react';

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
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box position="relative" right="100px">
            <Image
              borderRadius="5px"
              alt="Dream Category"
              fit="cover"
              align="center"
              h="100%"
              w="100%"
              margin="auto"
              src="https://res.cloudinary.com/baffle-space/image/upload/v1662207801/my-uploads/hero-image-w_hzq7ma.webp"
            />
          </Box>
          <Box>
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
