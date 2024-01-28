'use client'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'

import Image from 'next/image';

import styles from './ThemeButton.module.scss';

import darkThemeImg from '@/lib/assets/dark-mode.svg';
import lightThemeImg from '@/lib/assets/light-mode.svg';

interface IThemeButtonProps { }

export default function ThemeButton(
  props: React.PropsWithChildren<IThemeButtonProps>
) {
  const { theme, setTheme } = useTheme()

  // OLD IMPLEMENTATION:
  // const defaultTheme = 'light';
  // const [activeTheme, setActiveTheme] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   themeCheck();
  // }, [activeTheme]);

  // useEffect(() => {
  //   themeCheck();
  // }, []);

  // const themeCheck = () => {
  //   if (activeTheme === undefined && "theme" in localStorage) {
  //     localStorage.theme
  //     document.body.dataset.theme = localStorage.theme;
  //     setActiveTheme(localStorage.theme)
  //   } else if (
  //     (activeTheme === undefined && !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  //     (activeTheme !== undefined && activeTheme === 'dark')
  //   ) {
  //     document.body.dataset.theme = 'dark';
  //     localStorage.removeItem('theme');
  //     window.localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.body.dataset.theme = 'light';
  //     localStorage.removeItem('theme');
  //     window.localStorage.setItem('theme', 'light');
  //   }
  // }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    // OLD IMPLEMENTATION:
    // const theme = localStorage.getItem("theme");
    // if (theme) {
    //   localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    //   setActiveTheme(theme === "dark" ? "light" : "dark")
    // } else {
    //   localStorage.setItem("theme", defaultTheme);
    //   setActiveTheme(defaultTheme)
    // }
  };

  return (
    <button
      className={styles.themeButton}
      onClick={toggleTheme}
    >
      <Image
        src={theme === 'dark' ? darkThemeImg : lightThemeImg}
        alt=""
        width={'16'}
        height={'16'}
        quality={100}
      />
      {props.children}
    </button>
  );
}
