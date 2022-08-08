import ListWithColorBullets from '@/root/components/listWithColorBullets';

import styles from './AccumulationDrawing.module.scss';

const AccumulationDrawing = () => {
  return (
    <div className={styles.drawerWrapper}>
      <div className={styles.daysCountWrapper}>
        <p>7 days accumulation period</p>
      </div>
      <div className={styles.mainDrawingWrapper}>
        <div className={`${styles.column} ${styles.firstColumn}`}>
          <div>100%</div>
        </div>
        <div className={`${styles.column} ${styles.secondColumn}`}>
          <div>60%</div>
        </div>
        <div className={`${styles.column} ${styles.thirdColumn}`}>
          <div>20%</div>
        </div>
        <div className={`${styles.column} ${styles.fourthColumn}`}>
          <div>20%</div>
        </div>
      </div>

      <ListWithColorBullets />
    </div>
  );
};

export default AccumulationDrawing;
