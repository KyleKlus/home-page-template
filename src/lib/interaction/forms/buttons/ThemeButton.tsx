/** @format */
"use client"
import { useTheme } from 'next-themes';
import styles from './ThemeButton.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import lightModeSVG from './light-mode.svg';
import darkModeSVG from './dark-mode.svg';

interface IThemeButtonProps { }

export default function ThemeButton(
  props: React.PropsWithChildren<IThemeButtonProps>
) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoids hydration mismatch on SSR
  }

  return (
    <button
      className={[styles.themeButton, 'buttonClass'].join(' ')}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Image
        src={resolvedTheme === "dark" ? darkModeSVG : lightModeSVG}
        alt=""
        width={'16'}
        height={'16'}
        quality={100}
      />
      {props.children}
    </button>
  );
}
