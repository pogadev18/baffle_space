import { Container, Stack, Box } from '@chakra-ui/react';

import CTAs from './CTAs';
import HeroText from './HeroText';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Box
      width="100%"
      backgroundImage={{
        base: 'url(https://res.cloudinary.com/baffle-space/image/upload/v1660306371/my-uploads/hdeogqjyfbbkruq1ngos.webp), url(https://res.cloudinary.com/baffle-space/image/upload/v1660306360/my-uploads/cu5sdivswvpow7e0ut5c.jpg)',
        md: 'url(https://res.cloudinary.com/baffle-space/image/upload/v1660305975/my-uploads/qwjzoktwccp8ouhrvurn.webp), url(https://res.cloudinary.com/baffle-space/image/upload/v1660305968/my-uploads/xo4aetcflcjefqacyqgv.jpg)',
      }}
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Container
        display={{ base: 'block', lg: 'flex' }}
        height={{ base: '100vh', lg: 'calc(100vh - 128px)' }}
        maxW="8xl"
        position="relative"
        paddingX={{ base: '0px', lg: '40px' }}
      >
        <Stack
          className="info-container"
          align="center"
          spacing={{ base: 8, sm: 10 }}
          py={{ base: 0, lg: 40 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack className={styles.heroInfo}>
            <HeroText />
            <Box display={{ base: 'none', lg: 'block' }}>
              <CTAs mobileVersion={false} />
            </Box>
          </Stack>
          <Box
            position="absolute"
            bottom="20px"
            left="25px"
            right="25px"
            display={{ base: 'block', lg: 'none' }}
          >
            <CTAs mobileVersion />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
