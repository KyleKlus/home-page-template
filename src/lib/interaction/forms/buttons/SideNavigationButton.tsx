/** @format */
import styles from './SideNavigationButton.module.css';

interface ISideNavigationButtonProps {
  onClick?: any;
  isActive: boolean;
}

export default function SideNavigationButton(
  props: ISideNavigationButtonProps
) {
  return (
    <div
      className={[styles.sideNav, 'buttonClass', props.isActive ? `${styles.isActive} activeButtonClass` : ''].join(' ')}
      onClick={props.onClick}
    >
      <div className={styles.barContainer}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
