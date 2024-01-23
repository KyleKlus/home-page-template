/** @format */
import Card from '@/lib/components/container/Card';
import ScrollNavLink from '@/lib/components/interaction/links/ScrollNavLink';

import styles from './SideNavigation.module.css';

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
        <ScrollNavLink
          className={styles.sideNavLink}
          elementName="/#heroPage"
          displayText="Home"
        />
        <ScrollNavLink
          className={styles.sideNavLink}
          elementName="/#portfolioPage"
          displayText="Portfolio"
        />
        <ScrollNavLink
          className={styles.sideNavLink}
          elementName="/#aboutPage"
          displayText="About"
        />
      </Card>
      {props.children}
    </nav>
  );
}
