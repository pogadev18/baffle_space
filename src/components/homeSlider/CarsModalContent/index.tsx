import { modalCarsData } from '@/root/constants/modalCars';
import Car from './Car';

import styles from './CarsModalContent.module.scss';

const CarsModalContent = () => {
  return (
    <ul className={styles.carsWrapper}>
      {modalCarsData.map((car) => (
        <Car carType={car.carType} imageSrc={car.imageSrc} price={car.price} />
      ))}
    </ul>
  );
};

export default CarsModalContent;
