import {
  firstRowMain,
  firstRowSecondary,
  secondRowMain,
  secondRowSecondary,
  lastRow,
} from '@/root/constants/modalElectronics';

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
                key={product.title}
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
              titleBig
              price={firstRowMain.price}
              title={firstRowMain.title}
              imageSrc={firstRowMain.imageSrc}
              info={firstRowMain.info}
            />
          </ul>
        </div>
      </section>
      <section className={`${styles.row} ${styles.secondRow}`}>
        <div className={styles.column}>
          <ul>
            <Product
              titleBig
              price={secondRowMain.price}
              imageSrc={secondRowMain.imageSrc}
              title={secondRowMain.title}
              info={secondRowMain.info}
            />
          </ul>
        </div>
        <div className={styles.column}>
          <ul>
            {secondRowSecondary.map((product) => (
              <Product
                key={product.title}
                price={product.price}
                imageSrc={product.imageSrc}
                title={product.title}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className={`${styles.row} ${styles.thirdRow}`}>
        {lastRow.map((product) => (
          <Product price={product.price} imageSrc={product.imageSrc} title={product.title} />
        ))}
      </section>
    </>
  );
};

export default CarsModalContent;
