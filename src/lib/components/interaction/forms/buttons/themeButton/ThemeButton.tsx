'use client'
import { useTheme } from 'next-themes'

import styles from './ThemeButton.module.scss';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';
import Button from '@/lib/components/interaction/forms/buttons/Button';

interface IThemeButtonProps { }

const ThemeButton = (
  props: React.PropsWithChildren<IThemeButtonProps>
) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    let nextTheme = '';

    switch (theme) {
      case 'light':
        nextTheme = 'dark'
        break;
      case 'dark':
        nextTheme = 'system'
        break;
      case 'system':
        nextTheme = 'light'
        break;
      default:
        nextTheme = 'system'
        break;
    }

    setTheme(nextTheme);
  };

  const getThemeIcon = (theme: string | undefined) => {
    switch (theme) {
      case 'light':
        return <SunIcon />;
      case 'dark':
        return <MoonIcon />;
      default:
        return <SunMoonIcon />;
    }
  }

  return (
    <Button
      className={styles.themeButton}
      radius={'full'}
      onClick={mounted ? toggleTheme : () => { }}
    >
      {mounted && getThemeIcon(theme)}
    </Button>
  );
}

export default ThemeButton;
