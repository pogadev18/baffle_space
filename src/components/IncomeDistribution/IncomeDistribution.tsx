import { Container } from '@chakra-ui/react';

import styles from './IncomeDistribution.module.scss';

interface IIncomeDistributionProps {
  isChristmasModal?: boolean;
}

const IncomeDistribution = ({ isChristmasModal }: IIncomeDistributionProps) => {
  return (
    <section className={styles.sectionWrapper}>
      <Container maxW="8xl" className={styles.wrapper}>
        <h2>Income Distribution</h2>
        {isChristmasModal && <p className={styles.title}>concursuri ce depasesc 30 zile</p>}
        <div className={styles.distributionColumns}>
          <div>
            {!isChristmasModal && <p className={styles.title}>concursuri intre 7 si 30 zile</p>}
            {isChristmasModal && (
              <>
                <div className={styles.stepWrapper}>
                  <p className={styles.step}>step 1</p>
                  <p className={styles.stepDescription}>
                    <span>$1.000.000</span>
                    Toti banii stransi in primul pas merg catre castigator
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageFull}`}>100%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>step 2</p>
                  <p className={styles.stepDescription}>
                    Daca suma sa depasit , 20% din suma care depaseste valoarea de validare se
                    imparte intre 3 castigatori intr-o noua extragere
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageTwenty}`}>20%</span>
                  </p>
                </div>
              </>
            )}
            {!isChristmasModal && (
              <>
                <div className={styles.stepWrapper}>
                  <p className={styles.step}>step 1</p>
                  <p className={styles.stepDescription}>
                    Minimum amount to validate the game and move to the next step
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageFull}`}>100%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>step 2</p>
                  <p className={styles.stepDescription}>Earning of NFT owning players</p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageSixty}`}>60%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.stepDescription}>
                    Prize pool for the secondary draw to be split among 3 lucky winners
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageThirty}`}>30%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.stepDescription}>
                    Development and maintenance revenue of Baffle Space
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageEighteen}`}>18%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>charity</p>
                  <p className={styles.stepDescription}>
                    2% din suma stransa merge catre un fond special de caritate ca va fi gestionat
                    prin vot de catre detinatorii de NFTs indiferent de generatie
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageTwo}`}>2%</span>
                  </p>
                </div>
              </>
            )}
          </div>
          <div>
            {!isChristmasModal && <p className={styles.title}>concursuri ce depasesc 30 zile</p>}
            {isChristmasModal && (
              <>
                <div className={styles.stepWrapper}>
                  <p className={styles.step}>Earn step</p>
                  <p className={styles.stepDescription}>Earnings of NFT owning players</p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageThirtyFive}`}>
                      35%
                    </span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>charity</p>
                  <p className={styles.stepDescription}>
                    10% din suma stransa merge catre un fond special de caritate ca va fi gestionat
                    prin vot de catre detinatorii de NFTs indiferent de generatie
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageTen}`}>10%</span>
                  </p>
                </div>
              </>
            )}
            {!isChristmasModal && (
              <>
                <div className={styles.stepWrapper}>
                  <p className={styles.step}>step 1</p>
                  <p className={styles.stepDescription}>
                    <span>$1.000.000</span>
                    Toti banii stransi in primul pas merg catre castigator
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageFull}`}>100%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>step 2</p>
                  <p className={styles.stepDescription}>
                    Daca suma sa depasit , 20% din suma care depaseste valoarea de validare se
                    imparte intre 3 castigatori intr-o noua extragere
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageTwenty}`}>20%</span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>Earn step</p>
                  <p className={styles.stepDescription}>Earnings of NFT owning players</p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageThirtyFive}`}>
                      35%
                    </span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.stepDescription}>
                    Development and maintenance revenue of Baffle Space
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageThirtyFive}`}>
                      35%
                    </span>
                  </p>
                </div>

                <div className={styles.stepWrapper}>
                  <p className={styles.step}>charity</p>
                  <p className={styles.stepDescription}>
                    10% din suma stransa merge catre un fond special de caritate ca va fi gestionat
                    prin vot de catre detinatorii de NFTs indiferent de generatie
                  </p>
                  <p className={styles.stepPercentage}>
                    <span className={`${styles.percentage} ${styles.percentageTen}`}>10%</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

IncomeDistribution.defaultProps = {
  isChristmasModal: false,
};

export default IncomeDistribution;
