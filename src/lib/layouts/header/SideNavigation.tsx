/** @format */
import { defaultSiteConfig } from '@/app/defaultSiteConfig';
import styles from './SideNavigation.module.css';
import Card from '@/lib/container/Card';
import NavLink from '@/lib/interaction/links/NavLink';

interface ISideNavigationProps {
  isActive: boolean;
}
export default function SideNavigation(
  props: React.PropsWithChildren<ISideNavigationProps>
) {
  const isActiveClassName = props.isActive ? styles.isActive : styles.isDisabled;

  return (
    <nav className={[styles.sideNavMenu, isActiveClassName, 'shadowElevation_5'].join(' ')}>
      <Card className={[styles.menuCard].join(' ')}>
        <h4>Main Site</h4>
        <NavLink
          className={styles.sideNavLink}
          href={defaultSiteConfig.heropageUrl}
        >Home</NavLink>
        <NavLink
          className={styles.sideNavLink}
          href={defaultSiteConfig.portfoliopageUrl}
        >Portfolio</NavLink>
        <NavLink
          className={styles.sideNavLink}
          href={defaultSiteConfig.aboutpageUrl}
        >About</NavLink>
      </Card>
      {props.children}
    </nav>
  );
}
