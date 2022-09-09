import { Button, Image, Modal, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

import SliderModalSkeleton from '@/root/components/homeSlider/SliderModalSkeleton';
import HomeSliderContent from '@/root/components/homeSlider/HomeSliderContent';

import styles from './HomeSlider.module.scss';

const Slide4 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.slider}>
      <div className={styles.slideImage}>
        <Image
          borderRadius="5px"
          alt="Dream Car"
          fit="cover"
          align="center"
          h={{ base: 'auto', custom1110: '600px' }}
          w="100%"
          margin="auto"
          src="https://res.cloudinary.com/baffle-space/image/upload/v1662388696/my-uploads/case_qiqwen.webp"
        />
      </div>
      <div className={styles.carSliderInfo}>
        <h2>Dream House</h2>

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
            backgroundColor="black"
            color="white"
            textTransform="uppercase"
            onClick={onOpen}
            _hover={{
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            Read more
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <SliderModalSkeleton
          title="NOT FOR EVERYONE"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect"
          onClose={onClose}
        >
          <HomeSliderContent />
        </SliderModalSkeleton>
      </Modal>
    </div>
  );
};

export default Slide4;
