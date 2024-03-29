import { Button, Image, Modal, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

import SliderModalSkeleton from '@/root/components/homeSlider/SliderModalSkeleton';
import ChristmasModalContent from '@/root/components/homeSlider/ChristmasModalContent';

import styles from './HomeSlider.module.scss';

const Slide2 = () => {
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
            backgroundColor="black"
            color="white"
            onClick={onOpen}
            textTransform="uppercase"
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
          headerTextColor="#000"
          bgColor="#fff"
          title="THE BIG CHRISTMAS DRAW"
          closeModalColor="black"
          subtitle="loremasdasd asdasdasdas"
          onClose={onClose}
        >
          <ChristmasModalContent />
        </SliderModalSkeleton>
      </Modal>
    </div>
  );
};

export default Slide2;
