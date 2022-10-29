import { FaMapMarkerAlt } from 'react-icons/fa';
import { VscSettingsGear } from 'react-icons/vsc';
import { GiOnTarget } from 'react-icons/gi';

import { roadmapTexts } from '@/root/utils/texts';

import styles from './Road.module.scss';

const Road = () => {
  return (
    <section className={styles.roadWrapper}>
      {roadmapTexts.map((el) => {
        return (
          <div
            className={`${styles.roadInfo} ${el.jobDone && styles.jobDone} ${
              el.notStarted && styles.notStarted
            }`}
            key={el.title}
          >
            <div className={styles.iconWrapper}>
              {el.workInProgress && <VscSettingsGear className={styles.gearIcon} />}
              {el.jobDone && <FaMapMarkerAlt />}
              {el.notStarted && <GiOnTarget />}
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
