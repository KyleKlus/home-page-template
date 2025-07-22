/** @format */
"use client"

import scrollStyles from './ScrollNavLink.module.css';
import navStyles from './NavLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface INavLinkProps {
  className?: string;
  elementName: string;
  displayText: string;
}

export default function ScrollNavLink(props: React.PropsWithChildren<INavLinkProps>) {
  const pathname = usePathname();
  const [isInView, setIsInView] = useState(false)
  const styleClass = props.className ? props.className : ''
  const classes =
    isInView || pathname.endsWith(props.elementName) ? [navStyles.isCurrentWindow, styleClass].join(' ') : styleClass;

  useEffect(() => {
    function determineCurrentPage() {
      const element = document.getElementById(props.elementName.replace('/#', ''))
      if (element) {
        const top = element.offsetTop
        const bottom = element.offsetHeight + top
        const currentPos = document.documentElement.scrollTop

        if (top - 200 <= currentPos && bottom - 200 >= currentPos) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      }
    }

    determineCurrentPage()

    window.addEventListener('scroll', determineCurrentPage);
    return () => {
      window.removeEventListener('scroll', determineCurrentPage);
    };
  }, []);

  const correctElement = props.elementName.startsWith('/') || props.elementName.startsWith('www.') || props.elementName.startsWith('https')
    ? <Link
      className={[navStyles.navLink, classes].join(' ')}
      href={props.elementName}
    >
      {props.displayText}
    </Link>
    : <button
      className={[scrollStyles.scrollNavLink, navStyles.navLink, classes].join(' ')}
      onClick={(e) => {
        const element = document.getElementById(props.elementName)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
          setIsInView(true)
        }
        e.preventDefault()
      }}
    >
      {props.displayText}
    </button>

  return (
    { ...correctElement }
  );
}
