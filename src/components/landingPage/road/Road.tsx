import { Image } from '@chakra-ui/react';

import styles from './Road.module.scss';

const Road = () => {
  return (
    <>
      <section className={styles.roadWrapper}>
        <div className={styles.roadContent}>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
            <p>
              <Image
                alt="Car Image"
                fit="cover"
                align="center"
                h="100%"
                w="200px"
                margin="auto"
                src="/car.png"
              />
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q3 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q4 <span>2022</span>
            </p>
          </div>
          <div className={styles.roadElement}>
            <p className={styles.quarterText}>
              Q4 <span>2022</span>
            </p>
          </div>
        </div>
        <div className={styles.roadDescriptions}>
          <p className={`${styles.checkpointDescription} ${styles.current}`}>
            Landing page <span>launch of the landing page</span>
          </p>
          <p className={styles.checkpointDescription}>
            Community onboarding <span>Open communication channels</span>
          </p>
          <p className={styles.checkpointDescription}>
            Community earning mechanism setup <span>Initial method to earn</span>
          </p>
          <p className={styles.checkpointDescription}>
            Baffle Space NFT Genesis Collection Launch <span>Minting enabled</span>
          </p>
          <p className={styles.checkpointDescription}>
            Gaming dAPP Launch <span>Play to win initial dream prizes</span>
          </p>
          <p className={styles.checkpointDescription}>
            Second layer draw release <span>Add more chances to win for each game</span>
          </p>
          <p className={styles.checkpointDescription}>
            Prize categories expansion <span>More dream prizes to choose from</span>
          </p>
        </div>
      </section>

      <section className={styles.rocketLaunch}>
        <div className={styles.launchCol1}>
          <p className={`${styles.quarterText} ${styles.noBorder}`}>
            Q1 <span>2023</span>
          </p>
        </div>
        <div className={styles.launchCol2}>
          <Image
            alt="Car Image"
            fit="cover"
            align="center"
            h="100%"
            w="300px"
            margin="auto"
            src="/rocket.png"
          />
          <p className={styles.checkpointDescription}>
            International launch <span>Baffle space games open to the world</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Road;

//
// const Road = () => {
//   return (
//     <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1500 1500">
//       <rect
//         style={{ fill: '#2B2B2B' }}
//         x="650.94"
//         y="167.5"
//         className="st0"
//         width="197.53"
//         height="1189.34"
//       />
//       <line
//         style={{
//           fill: 'none',
//           stroke: '#4D4D4D',
//           strokeWidth: 9,
//           strokeMiterlimit: 10,
//           strokeDasharray: 50,
//         }}
//         className="st1"
//         x1="744.08"
//         y1="183.5"
//         x2="744.08"
//         y2="1372.84"
//       />
//       <g>
//         <rect
//           x="650.94"
//           y="137.03"
//           style={{ fill: '#FFC000' }}
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="666.18"
//           y="152.27"
//           style={{ fill: '#FFC000' }}
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1347.593 319.7691)"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           x="681.42"
//           y="137.03"
//           style={{ fill: '#FFC000' }}
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="696.65"
//           style={{ fill: '#FFC000' }}
//           y="152.27"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1408.5433 319.7691)"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#FFC000' }}
//           x="711.89"
//           y="137.03"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="727.13"
//           y="152.27"
//           style={{ fill: '#FFC000' }}
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1469.4938 319.7691)"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#FFC000' }}
//           x="742.37"
//           y="137.03"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="757.6"
//           y="152.27"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1530.4442 319.7691)"
//           className="st2"
//           style={{ fill: '#FFC000' }}
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#FFC000' }}
//           x="772.28"
//           y="137.03"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="787.52"
//           y="152.27"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1590.2762 319.7691)"
//           className="st2"
//           style={{ fill: '#FFC000' }}
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#FFC000' }}
//           x="802.76"
//           y="137.03"
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="817.99"
//           y="152.27"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1651.2267 319.7691)"
//           className="st2"
//           style={{ fill: '#FFC000' }}
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           x="833.23"
//           y="137.03"
//           style={{ fill: '#FFC000' }}
//           className="st2"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           x="650.94"
//           y="152.27"
//           style={{ fill: '#3F3F3F' }}
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="666.18"
//           y="137.03"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1347.593 289.2939)"
//           className="st3"
//           style={{ fill: '#3F3F3F' }}
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           x="681.42"
//           y="152.27"
//           style={{ fill: '#3F3F3F' }}
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="696.65"
//           style={{ fill: '#3F3F3F' }}
//           y="137.03"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1408.5433 289.2939)"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#3F3F3F' }}
//           x="711.89"
//           y="152.27"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="727.13"
//           style={{ fill: '#3F3F3F' }}
//           y="137.03"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1469.4938 289.2939)"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           x="742.37"
//           style={{ fill: '#3F3F3F' }}
//           y="152.27"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="757.6"
//           style={{ fill: '#3F3F3F' }}
//           y="137.03"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1530.4442 289.2939)"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#3F3F3F' }}
//           x="772.28"
//           y="152.27"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           style={{ fill: '#3F3F3F' }}
//           x="787.52"
//           y="137.03"
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1590.2762 289.2939)"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           style={{ fill: '#3F3F3F' }}
//           x="802.76"
//           y="152.27"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//
//         <rect
//           x="817.99"
//           y="137.03"
//           style={{ fill: '#3F3F3F' }}
//           transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 1651.2267 289.2939)"
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//         <rect
//           x="833.23"
//           y="152.27"
//           style={{ fill: '#3F3F3F' }}
//           className="st3"
//           width="15.24"
//           height="15.24"
//         />
//       </g>
//     </svg>
//   );
// };
//
// export default Road;
