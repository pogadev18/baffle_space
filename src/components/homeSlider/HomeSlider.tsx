import { Container } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

import Slide1 from './Slide1';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './HomeSlider.module.scss';

const HomeSlider = () => (
  <Container
    display={{ base: 'block', lg: 'flex' }}
    height="100vh"
    maxW="8xl"
    position="relative"
    paddingX={{ base: '0px', lg: '40px' }}
    className={styles.carouselWrapper}
  >
    <Carousel className={styles.baffleCarousel} swipeable showArrows={false} showStatus={false}>
      <div className={styles.slideWrapper}>
        <Slide1 />
      </div>
      <div className={styles.slideWrapper}>
        <h2>Slide 2</h2>
      </div>
      <div className={styles.slideWrapper}>
        <h2>Slide 3</h2>
      </div>
    </Carousel>
  </Container>
);

export default HomeSlider;
