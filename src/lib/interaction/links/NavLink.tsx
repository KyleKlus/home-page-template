/** @format */

import styles from './NavLink.module.css';
import Link from 'next/link';

export default function NavLink(props: React.PropsWithChildren<React.ComponentPropsWithRef<typeof Link>>) {
  return (
    <Link
      {...props}
      className={[styles.navLink, props.className].join(' ')}
    >
      {props.children}
    </Link>
  );
}
