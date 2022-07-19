import ListWithColorBullets from '@/root/components/listWithColorBullets';

import styles from './AccumulationDrawing.module.scss';

const AccumulationDrawing = () => {
  return (
    <div className={styles.drawerWrapper}>
      <div className={styles.daysCountWrapper}>
        <p>day 1 start</p>
        <p className={styles.hideOnMobile}>7 days</p>
        <p className={styles.hideOnMobile}>day 7 end</p>
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
        <p className={styles.mobileDay}>day 7 end</p>
      </div>

      <ListWithColorBullets />
    </div>
  );
};

export default AccumulationDrawing;
