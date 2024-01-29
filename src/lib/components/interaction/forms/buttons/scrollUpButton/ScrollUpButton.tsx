'use client'
import { ChevronsUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import Button from '../Button';
import styles from './ScrollUpButton.module.scss';
import { useEffect, useState } from 'react';

export default function ScrollUpButton() {
  const [isScrollArrowVisible, setIsScrollArrowVisible] = useState(false);

  useEffect(() => {
    function hideAndShowScrollArrow() {
      setIsScrollArrowVisible(window.scrollY > 64);
    }

    window.addEventListener('scroll', hideAndShowScrollArrow);

    return () => {
      window.removeEventListener('scroll', hideAndShowScrollArrow);
    };
  }, []);

  return (
    <Button
      radius='full'
      className={cn(
        styles.scrollUpButton,
        isScrollArrowVisible && styles.isVisible
      )}
      onClick={() => {
        const top = document.getElementById('top-of-page');
        if (top) { top.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); }
      }}
    >
      <ChevronsUp />
    </Button>
  );
}
