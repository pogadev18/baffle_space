import Slider from 'react-slick';
import { Container } from '@chakra-ui/react';

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

import styles from './HomeSlider.module.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HomeSlider = () => (
  <Container paddingX={{ base: '25px', md: '40px' }} maxW="8xl" className={styles.carouselWrapper}>
    <Slider {...settings}>
      <div className={styles.slideWrapper}>
        <Slide1 />
      </div>
      <div className={styles.slideWrapper}>
        <Slide2 />
      </div>
      <div className={styles.slideWrapper}>
        <Slide3 />
      </div>
      <div className={styles.slideWrapper}>
        <Slide4 />
      </div>
    </Slider>
  </Container>
);

export default HomeSlider;
