import { FaMapMarkerAlt } from 'react-icons/fa';

import { roadmapTexts } from '@/root/utils/texts';

import styles from './Road.module.scss';

const Road = () => {
  return (
    <section className={styles.roadWrapper}>
      {roadmapTexts.map((el) => {
        return (
          <div className={`${styles.roadInfo} ${el.isActive ? styles.active : ''}`} key={el.title}>
            <div className={styles.pinIcon}>
              <FaMapMarkerAlt />
            </div>
            <p className={styles.quarterAndYear}>
              {el.quarter} <span>{el.year}</span>
            </p>
            <p className={styles.title}>{el.title}</p>
            <p className={styles.subtitle}>{el.subtitle}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Road;
