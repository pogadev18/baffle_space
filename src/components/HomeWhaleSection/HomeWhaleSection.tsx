import { Button, Container, Image, Text } from '@chakra-ui/react';

import styles from './HomeWhaleSection.module.scss';

const HomeWhaleSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Container className={styles.container} position="relative" maxW="8xl">
        <div>
          <h2>You can earn, not also win</h2>
          <Text color="white" fontSize="18px" width={{ base: 'auto', md: '620px' }} margin="auto">
            A timeframe will be set for each game in which players will be able to buy tickets for
            the Dream Prize they chose in the previous step. <br />
            <br />
            The first category of prizes players can play for will be Dream Electronics and it will
            have a 7 day accumulation period. Different Dream Prize Categories will have different
            timeframes. This step will determine the validation of the game, the reward amounts, the
            secondary draw prize pool and Baffle Space development and maintenance revenue.
          </Text>
          <Button
            rounded="full"
            variant="solid"
            size={{ base: 'md', lg: 'lg' }}
            px={6}
            border="1px solid white"
            width={{ base: '100%', md: '260px' }}
            backgroundColor="transparent"
            color="white"
            marginTop="30px"
            textTransform="uppercase"
            _hover={{
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            Read More
          </Button>
        </div>
        <div>
          <Image
            borderRadius="5px"
            alt="NFT 2"
            fit="cover"
            align="center"
            h="auto"
            w="100%"
            margin="auto"
            src="https://res.cloudinary.com/baffle-space/image/upload/v1662565936/my-uploads/nft_p5ekem.png"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeWhaleSection;
