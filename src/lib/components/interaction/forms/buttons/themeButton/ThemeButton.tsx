'use client'
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
