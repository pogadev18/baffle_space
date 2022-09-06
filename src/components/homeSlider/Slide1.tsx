import React from 'react';
import { Button, Image, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';

import SliderModalSkeleton from './SliderModalSkeleton';
import CarsModalContent from './CarsModalContent';

import styles from './HomeSlider.module.scss';

const Slide1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.slider}>
      <div className={styles.slideImage}>
        <Image
          borderRadius="5px"
          alt="Dream Car"
          fit="cover"
          align="center"
          h={{ base: 'auto', custom1110: '300px' }}
          w="100%"
          margin="auto"
          src="https://res.cloudinary.com/baffle-space/image/upload/v1662397590/my-uploads/masina_copy_simz10.webp"
        />
      </div>
      <div className={styles.carSliderInfo}>
        <h2>
          Your dream to win <br />a luxury car
        </h2>
        <h3>Home of the play to win &amp; earn games</h3>
        <div className={styles.carButtons}>
          <Button
            rounded="full"
            variant="solid"
            size={{ base: 'md', lg: 'lg' }}
            px={6}
            onClick={onOpen}
            border="1px solid black"
            width={{ base: '100%', md: '260px' }}
            backgroundColor="black"
            color="white"
            textTransform="uppercase"
            _hover={{
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            Cars collection
          </Button>
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
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <SliderModalSkeleton title="" onClose={onClose}>
          <CarsModalContent />
        </SliderModalSkeleton>
      </Modal>
    </div>
  );
};

export default Slide1;
