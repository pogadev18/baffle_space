import { Image } from '@chakra-ui/react';

import styles from './ElectronicsModalContent.module.scss';

interface ProductProps {
  title: string;
  imageSrc: string;
  info?: string[];
  price: string;
  titleBig?: boolean;
}

const Product = ({ title, imageSrc, info, price, titleBig }: ProductProps) => {
  return (
    <li className={styles.product}>
      <p className={styles.chanceToWin}>
        1 Chance to win - <span>6 Matic</span>
      </p>
      <Image
        alt={title}
        fit="cover"
        align="center"
        h="auto"
        w="100%"
        margin="auto"
        src={imageSrc}
      />
      <p className={`${styles.title} ${titleBig ? styles.titleBig : ''}`}>{title}</p>
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
  titleBig: false,
};

export default Product;
