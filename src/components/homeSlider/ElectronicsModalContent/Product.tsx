import { Image } from '@chakra-ui/react';

import styles from './ElectronicsModalContent.module.scss';

interface ProductProps {
  title: string;
  imageSrc: string;
  info?: string[];
  price: string;
}

const Product = ({ title, imageSrc, info, price }: ProductProps) => {
  return (
    <li className={styles.product}>
      <Image
        alt={title}
        fit="cover"
        align="center"
        h="auto"
        w="100%"
        margin="auto"
        src={imageSrc}
      />
      <p className={styles.title}>{title}</p>
      {info &&
        info.map((detail) => (
          <p className={styles.title} key={detail}>
            {detail}
          </p>
        ))}
      <p className={styles.productPrice}>{price}</p>
    </li>
  );
};

Product.defaultProps = {
  info: [],
};

export default Product;
