import { Image } from '@chakra-ui/react';

import styles from './CarsModalContent.module.scss';

interface CarProps {
  carType: string;
  imageSrc: string;
  price: string;
}

const Car = ({ carType, imageSrc, price }: CarProps) => {
  return (
    <li className={styles.car}>
      <p className={styles.chanceToWin}>
        1 Chance to win - <span>6 Matic</span>
      </p>
      <Image
        borderRadius="5px"
        alt={carType}
        fit="cover"
        align="center"
        h="auto"
        w="100%"
        margin="auto"
        src={imageSrc}
      />
      <p className={styles.carType}>{carType}</p>
      <p className={styles.carPrice}>{price}</p>
    </li>
  );
};

export default Car;
