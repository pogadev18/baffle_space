import Link from 'next/link';

export const TwitterSvg = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z"
      fill="#00B0CA"
    />
    <path
      d="M18.3836 34.3676C28.3601 34.3676 33.8164 26.1022 33.8164 18.9348C33.8164 18.6997 33.8119 18.4657 33.8006 18.2339C34.8593 17.4678 35.7806 16.5127 36.5063 15.4259C35.5343 15.8579 34.488 16.1482 33.3911 16.2798C34.5105 15.6082 35.3711 14.5462 35.7761 13.2794C34.7276 13.9004 33.5678 14.3527 32.3325 14.5957C31.3425 13.5416 29.9329 12.8823 28.3736 12.8823C25.3778 12.8823 22.9489 15.3112 22.9489 18.3059C22.9489 18.7312 22.9961 19.1452 23.0895 19.5423C18.5816 19.3162 14.5845 17.1573 11.9093 13.8757C11.4435 14.6767 11.1746 15.6082 11.1746 16.6016C11.1746 18.4837 12.132 20.1442 13.5889 21.1162C12.699 21.0892 11.8631 20.8439 11.1319 20.4378C11.1308 20.4603 11.1308 20.4828 11.1308 20.5064C11.1308 23.1333 13.0005 25.3271 15.4823 25.8243C15.0266 25.9481 14.5474 26.0156 14.0524 26.0156C13.7025 26.0156 13.3628 25.9807 13.0331 25.9177C13.7239 28.0732 15.7264 29.6403 18.1001 29.6853C16.2439 31.1399 13.905 32.0073 11.3636 32.0073C10.926 32.0073 10.494 31.9826 10.0699 31.9319C12.4706 33.4698 15.3203 34.3687 18.3848 34.3687"
      fill="white"
    />
  </svg>
);

const LogoTwitter = () => {
  return (
    <Link href="https://twitter.com/BaffleSpace">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a target="_blank">
        <TwitterSvg />
      </a>
    </Link>
  );
};

export default LogoTwitter;
