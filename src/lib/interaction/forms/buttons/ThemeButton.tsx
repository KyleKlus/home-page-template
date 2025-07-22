/** @format */
"use client"
import { useTheme } from 'next-themes';
import styles from './ThemeButton.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

  // const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  // const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  return (
    <button
      className={styles.themeButton}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Image
        src={process.env.basePath + '/' + resolvedTheme + '-mode.svg'}
        alt=""
        width={'16'}
        height={'16'}
        quality={100}
      ></Image>
      {props.children}
    </button>
  );
}
