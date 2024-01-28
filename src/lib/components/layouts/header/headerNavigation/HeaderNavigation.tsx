/** @format */
import styles from './HeaderNavigation.module.scss';

interface IHeaderNavigationProps { }

export default function HeaderNavigation(props: React.PropsWithChildren<IHeaderNavigationProps>) {
  return (
    <nav className={styles.nav}>
      {props.children}
    </nav>
  );
}
