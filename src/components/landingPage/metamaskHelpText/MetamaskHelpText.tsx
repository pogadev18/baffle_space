import { METAMASK_APP_URL } from '@/root/constants';

import styles from './MetamaskHelperText.module.scss';

const MetamaskHelpText = () => {
  return (
    <section className={styles.helpTextWrapper}>
      <p>In order to fully experience Baffle Space, you need to have MetaMask enabled:</p>
      <div className={styles.descriptionList}>
        <p> - if you are on desktop, click the link below to download the browser extension </p>
        <p>
          - if you are on mobile, tap the link below to either download metamask from your app store
          or access the website from metamask application if you already have it installed
        </p>
        <p>
          <a href={METAMASK_APP_URL}>
            <strong>Enter from MetaMask</strong>
          </a>
        </p>
      </div>
    </section>
  );
};

export default MetamaskHelpText;
