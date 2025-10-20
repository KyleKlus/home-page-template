"use client"
import styles from './ScrollToTargetButton.module.css';
import Image from 'next/image';
import scrollUpSVG from './up-arrow.svg';
import { useState, useRef, useEffect } from 'react';

interface IScrollToTargetButtonProps {
  targetElementId: string;
  hiddenPositionFromTop?: number;
  isVisible?: boolean;
}

export default function ScrollToTargetButton(
  props: IScrollToTargetButtonProps
) {
  const [isVisible, setIsVisible] = useState(false);
  const lastScroll = useRef(0);

  function hideAndShowArrow() {
    if (props.isVisible !== undefined) { return; }

    const currentScrollPos = window.pageYOffset;
    const lastScrollPos = lastScroll.current;
    lastScroll.current = currentScrollPos;

    if (currentScrollPos <= (props.hiddenPositionFromTop || 64)) {
      setIsVisible(false);
    } else if (currentScrollPos < lastScrollPos) {
      // up
    } else if (currentScrollPos > lastScrollPos) {
      // down
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideAndShowArrow);
    return () => {
      window.removeEventListener('scroll', hideAndShowArrow);
    };
  }, []);

  const isVisibleClass = props.isVisible !== undefined && props.isVisible ||
    props.isVisible === undefined && isVisible
    ? styles.isVisible
    : '';

  return (
    <button
      className={['buttonClass', styles.scrollUpButton, isVisibleClass].join(' ')}
      onClick={() => {
        const top = document.getElementById(props.targetElementId);
        if (top) { top.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }
      }}
    >
      <Image
        id={'scroll-up-button-image'}
        className={[styles.image].join(' ')}
        alt='ScrollToTargetArrow'
        src={scrollUpSVG}
        width={22}
        height={22}
      />
    </button>
  );
}
