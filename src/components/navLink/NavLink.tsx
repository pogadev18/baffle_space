import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavLink.module.scss';

const activeLink = (url: string, pathname: string): string | '' => {
  return pathname === `/${url}` ? styles.active : '';
};

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => {
  const router = useRouter();

  return (
    <Link href={`/${url}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`${styles.navLink} ${activeLink(url, router.pathname)}`}>{children}</a>
    </Link>
  );
};

export default NavLink;
