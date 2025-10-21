import styles from './AppHeader.module.css';
import Logo from '@/lib/layouts/header/Logo';
import ThemeButton from '@/lib/interaction/forms/buttons/ThemeButton';

export default function AppHeader() {

  return (
    <div className={styles.appHeader}>
      <Logo />
      <ThemeButton />
    </div>
  );
}
