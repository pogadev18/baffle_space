import { Container, Stack, Box } from '@chakra-ui/react';

import CTAs from './CTAs';
import HeroText from './HeroText';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Box
      width="100%"
      backgroundImage={{ base: 'url(./mobile_hero.jpg)', md: 'url(./desktop_hero.jpg)' }}
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Container
        display={{ base: 'block', md: 'flex' }}
        height={{ base: '100vh', md: 'calc(100vh - 128px)' }}
        maxW="8xl"
        position="relative"
        paddingX={{ base: '25px', md: '40px' }}
      >
        <Stack
          align="center"
          spacing={{ base: 8, sm: 10 }}
          py={{ base: 0, md: 40 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack className={styles.heroInfo}>
            <HeroText />
            <Box display={{ base: 'none', md: 'block' }}>
              <CTAs mobileVersion={false} />
            </Box>
          </Stack>
          <Box
            position="absolute"
            bottom="20px"
            left="25px"
            right="25px"
            display={{ base: 'block', md: 'none' }}
          >
            <CTAs mobileVersion />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
