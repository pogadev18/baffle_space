import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavLink.module.scss';

const activeLink = (url: string, pathname: string): string | '' => {
  return pathname === `/${url}` ? styles.active : '';
};

const defaultProps = {
  onClick: () => {},
};

type NavLinkProps = {
  children: ReactNode;
  url: string;
  onClick?: () => void;
} & typeof defaultProps;

const NavLink = ({ children, url, onClick }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link href={`/${url}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        role="button"
        onKeyDown={onClick}
        tabIndex={-10}
        onClick={onClick}
        className={`${styles.navLink} ${activeLink(url, router.pathname)}`}
      >
        {children}
      </a>
    </Link>
  );
};

NavLink.defaultProps = defaultProps;

export default NavLink;
