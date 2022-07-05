import { Heading, Box, Text } from '@chakra-ui/react';

import styles from './RoadMap.module.scss';

const RoadMap = () => {
  return (
    <Box className={styles.roadMap}>
      <Box px={20} className={styles.cityAndCloudsWrapper}>
        <Box textAlign="center" pt={10}>
          <Heading
            mb={10}
            color="white"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
          >
            Roadmap 2022
          </Heading>
          <Text textAlign="center" fontSize="3xl" color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus iusto nihil
            obcaecati possimus quo recusandae? A ad aspernatur deserunt, dicta distinctio doloremque
            eligendi, esse eum minus mollitia, sapiente sit?
          </Text>
        </Box>
        <Box className={styles.cityImageWrapper}>
          <img className={styles.baseImage} src="/city.png" alt="City on the road map" />
        </Box>
      </Box>

      <Box className={styles.roadmapWrapper}>
        <img className={styles.baseImage} src="/map.png" alt="Baffle.space roadmap" />
      </Box>
    </Box>
  );
};

export default RoadMap;
