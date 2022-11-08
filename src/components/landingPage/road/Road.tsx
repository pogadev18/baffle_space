import { FaCheck } from 'react-icons/fa';
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
              {el.jobDone && <FaCheck />}
              {el.notStarted && <GiOnTarget />}
            </div>
            <p className={styles.quarterAndYear}>
              {el.quarter} <span>{el.year}</span>
            </p>
            <p className={styles.title}>{el.title}</p>
            {el.subtitle && <p className={styles.subtitle}>{el.subtitle}</p>}
            {el.title2 && <br />}
            {el.title2 && <p className={styles.title}>{el.title2}</p>}
            {el.subtitle2 && <p className={styles.subtitle}>{el.subtitle2}</p>}
          </div>
        );
      })}
    </section>
  );
};

export default Road;
