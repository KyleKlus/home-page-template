'use client'

import React from 'react';
import { useEffect, useRef, useState } from 'react';

import ScrollUpButton from '@/lib/components/interaction/forms/buttons/scrollUpButton/ScrollUpButton';
import SideNavigationButton from './sideNavigation/sideNavigationButton/SideNavigationButton';
import Card from '@/lib/components/container/Card';
import NavLink from '@/lib/components/interaction/links/NavLink';

import HeaderNavigation from '@/lib/components/layouts/header/headerNavigation/HeaderNavigation';
import Logo from './logo/Logo';
import SideNavigation from './sideNavigation/SideNavigation';

import sideNavStyles from './sideNavigation/SideNavigation.module.scss'
import styles from './Header.module.scss';

interface IHeaderProps {
  overrideSideNavContent?: JSX.Element,
  addSideNavChildren?: JSX.Element[],
  addSideNavMenuCards?: JSX.Element[]
}

export default function Header(props: React.PropsWithChildren<IHeaderProps>) {
  const [isSideNavigationActive, setIsSideNavigationActive] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(true);
  const [isScrollArrowHidden, setIsScrollArrowHidden] = useState(true);
  const lastScroll = useRef(0);

  const isHeaderHiddenClassName = useRef('');

  const isActiveClassName = isSideNavigationActive
    ? styles.isWrapperActive
    : '';

  function hideAndShowHeader() {
    let slideInClass = ' ' + styles.slideIn;
    let scrollDownClass = styles.isHidden;

    if (isSideNavigationActive) { slideInClass = ''; scrollDownClass = [styles.isVisible].join(' '); }
    const currentScrollPos = window.pageYOffset;
    const lastScrollPos = lastScroll.current;
    lastScroll.current = currentScrollPos;

    if (currentScrollPos <= 64) {
      isHeaderHiddenClassName.current = '';

      setIsHeaderHidden(false);
      setIsScrollArrowHidden(true);
    } else if (currentScrollPos < lastScrollPos) {
      // up
      isHeaderHiddenClassName.current = [styles.isVisible].join(' ');

      setIsHeaderHidden(false);
    } else if (currentScrollPos > lastScrollPos) {
      // down
      isHeaderHiddenClassName.current = [styles.isVisible].join(' ');
      setIsHeaderHidden(true);
      setIsScrollArrowHidden(false);
    }
  }


  useEffect(() => {

    window.addEventListener('scroll', hideAndShowHeader);
    return () => {
      window.removeEventListener('scroll', hideAndShowHeader);
    };
  }, [isSideNavigationActive]);

  return (
    <div>
      <header className={[styles.header, isHeaderHiddenClassName.current].join(' ')}>
        <div className={styles.headerLeft}>
          <SideNavigationButton
            isActive={isSideNavigationActive}
            onClick={() => {
              setIsSideNavigationActive(!isSideNavigationActive);
              if (!isSideNavigationActive) {
                isHeaderHiddenClassName.current = isHeaderHiddenClassName.current;
                setIsHeaderHidden(false);
              } else {
                const currentScrollPos = window.pageYOffset;

                isHeaderHiddenClassName.current = currentScrollPos <= 64 ? '' : styles.isVisible
              }
            }}
          />
          <div
            className={
              styles.sideNavigationNegativeSpace + ' ' + isActiveClassName
            }
            onClick={() => {
              if (!isSideNavigationActive) {
                return;
              }
              setIsSideNavigationActive(false);
            }}
            onTouchStart={() => {
              if (!isSideNavigationActive) {
                return;
              }
              setIsSideNavigationActive(false);
            }}
          ></div>
          <Logo />
        </div>
        <HeaderNavigation>
          {props.children}
        </HeaderNavigation>
      </header>
      <SideNavigation isActive={isSideNavigationActive}>
        {props.overrideSideNavContent
          ? props.overrideSideNavContent
          : <>
            <Card className={sideNavStyles.menuCard}>
              <h4>Other Sites</h4>
              <NavLink
                className={sideNavStyles.sideNavLink}
                pathName="https://kyleklus.github.io/projects"
                displayText="Projects 🛠️"
              />
              <NavLink
                className={sideNavStyles.sideNavLink}
                pathName="https://kyleklus.github.io/Kyles-Cookbook/en"
                displayText="Cookbook 🧑‍🍳 🇬🇧"
              />
              <NavLink
                className={sideNavStyles.sideNavLink}
                pathName="https://kyleklus.github.io/Kyles-Cookbook/de"
                displayText="Cookbook 🧑‍🍳 🇩🇪"
              />
              <NavLink
                className={sideNavStyles.sideNavLink}
                pathName="https://kyleklus.github.io/receipt-manager"
                displayText="Receipt Manager 🧾"
              />
              {props.addSideNavChildren !== undefined && props.addSideNavChildren.map((child) => {
                return child;
              })}
            </Card>
            {props.addSideNavMenuCards !== undefined && props.addSideNavMenuCards.map((card) => {
              return card;
            })}
          </>
        }

      </SideNavigation>

    </div>
  );
}
