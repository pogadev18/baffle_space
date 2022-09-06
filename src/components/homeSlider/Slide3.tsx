import { Button, Image, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';

import SliderModalSkeleton from '@/root/components/homeSlider/SliderModalSkeleton';
import ElectronicsModalContent from './ElectronicsModalContent';

import styles from './HomeSlider.module.scss';

const Slide3 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          src="https://res.cloudinary.com/baffle-space/image/upload/v1662388352/my-uploads/electro_rdptkh.webp"
        />
      </div>
      <div className={styles.carSliderInfo}>
        <h2>
          or maybe you like
          <br /> high-end electronics
        </h2>
        <h3>All electronics are absolutely awesome!!</h3>
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
            onClick={onOpen}
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
        <SliderModalSkeleton
          title="Dream Electronics"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect"
          onClose={onClose}
        >
          <ElectronicsModalContent />
        </SliderModalSkeleton>
      </Modal>
    </div>
  );
};

export default Slide3;
