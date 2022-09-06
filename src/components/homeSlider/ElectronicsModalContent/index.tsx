import { firstRowMain, firstRowSecondary } from '@/root/constants/modalElectronics';

import Product from './Product';

import styles from './ElectronicsModalContent.module.scss';

const CarsModalContent = () => {
  return (
    <>
      <section className={`${styles.row} ${styles.firstRow}`}>
        <div className={styles.column}>
          <ul className={styles.listFlex}>
            {firstRowSecondary.map((product) => (
              <Product
                price={product.price}
                info={product.info}
                title={product.title}
                imageSrc={product.imageSrc}
              />
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <ul>
            <Product
              price={firstRowMain.price}
              title={firstRowMain.title}
              imageSrc={firstRowMain.imageSrc}
            />
          </ul>
        </div>
      </section>
      <section>second row</section>
    </>
  );
};

export default CarsModalContent;
