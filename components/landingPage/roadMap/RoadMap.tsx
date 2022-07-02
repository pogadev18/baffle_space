import { Text } from '@chakra-ui/react';

import styles from './RoadMap.module.scss';

const RoadMap = () => {
  return (
    <div className={styles.roadMap}>
      <div className={styles.cityAndClouds}>
        <Text fontSize="5xl" color="white">
          Roadmap 2022
        </Text>

        <div className={styles.cloudsImageWrapper}>
          <img className={styles.baseImage} src="/clouds.png" alt="Clouds in the sky" />
        </div>
        <div className={styles.cityImageWrapper}>
          <img className={styles.baseImage} src="/city.png" alt="City on the road map" />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
