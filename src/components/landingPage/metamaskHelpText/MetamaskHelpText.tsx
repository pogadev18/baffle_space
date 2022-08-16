import { isMobile } from 'react-device-detect';

import MetamaskMobileTutorial from '@/root/components/landingPage/metamaskMobileTutorial';
import { METAMASK_APP_URL } from '@/root/constants';

import styles from './MetamaskHelperText.module.scss';

const MetamaskHelpText = () => {
  return (
    <section className={styles.helpTextWrapper}>
      <div className={styles.descriptionList}>
        {!isMobile && (
          <>
            <p>To fully experience Baffle Space you need to have the MetaMask extension enabled.</p>
            <p>Click the link below to download and install it.</p>
            <p>
              <a href={METAMASK_APP_URL}>
                <strong>add to browser</strong>
              </a>
            </p>
          </>
        )}
        {isMobile && (
          <>
            <p>
              To fully experience Baffle Space you need to access the website from the MetaMask app.
            </p>
            <p>
              Tap the link below to either access the website from MetaMask or get it from your app
              store first.
            </p>
            <p>
              <MetamaskMobileTutorial />
            </p>
            <p>
              <a href={METAMASK_APP_URL}>
                <strong>enter from metamask</strong>
              </a>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default MetamaskHelpText;
