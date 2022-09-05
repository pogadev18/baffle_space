import React from 'react';
import { Button, Image, Text } from '@chakra-ui/react';

import styles from './HomeSlider.module.scss';

const Slide1 = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideImage}>
        <Image
          borderRadius="5px"
          alt="Dream Car"
          fit="cover"
          align="center"
          h={{ base: 'auto', custom1110: '400px' }}
          w="100%"
          margin="auto"
          src="https://res.cloudinary.com/baffle-space/image/upload/v1662387077/my-uploads/santa_sie56f.webp"
        />
      </div>
      <div className={styles.carSliderInfo}>
        <h2>
          The Big Christmas Draw <br />
          from
        </h2>
        <h2 className={styles.bigPrize}>$1.000.000</h2>

        <div className={styles.slideDescription}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, autem commodi dicta
            explicabo fugit molestias quas quasi. Alias, aliquid asperiores consectetur ea
            laboriosam maxime minus placeat provident quam temporibus.
          </Text>
        </div>
        <div className={styles.carButtons}>
          <Button
            rounded="full"
            variant="solid"
            size={{ base: 'md', lg: 'lg' }}
            px={6}
            border="1px solid black"
            width={{ base: '100%', md: '260px' }}
            backgroundColor="white"
            color="black"
            textTransform="uppercase"
            _hover={{
              backgroundColor: 'black',
              color: 'white',
            }}
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
