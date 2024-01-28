'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './NavLink.module.scss';

interface INavLinkProps {
  className?: string;
  pathName: string;
  displayText: string;
}

/**
 * A link, which shows if it leads to the current page
 * @param props
 * @returns
 */

export default function NavLink(props: React.PropsWithChildren<INavLinkProps>) {
  const [isCurrentWindow, setIsCurrentWindow] = useState(false)

  useEffect(() => {
    const hash = window.location.hash;
    const isHashPresent = hash.length !== 0;
    const href = window.location.pathname;
    const isPathPresent = href.length > 1;
    const isPropsPathNameAFullLink = props.pathName.indexOf('http') !== -1

    setIsCurrentWindow(
      (isHashPresent && props.pathName.split('/').reverse()[0] === window.location.hash) ||
      (isPathPresent && !isPropsPathNameAFullLink && props.pathName === href) ||
      (isPathPresent && isPropsPathNameAFullLink && ('/' + props.pathName.split('/').slice(3).join('/')) === href) ||
      (!isPathPresent && props.pathName.indexOf(window.location.hostname) !== -1)
    );
  });

  const isCurrentWindowClass = isCurrentWindow
    ? styles.isCurrentWindow
    : '';

  return (
    <Link
      className={[styles.navLink, isCurrentWindowClass, props.className].join(' ')}
      href={props.pathName}
    >
      {props.displayText}
    </Link>
  );
}
