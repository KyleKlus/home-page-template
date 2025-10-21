/** @format */

import styles from './Footer.module.css';
import { siteConfig } from '@/app/siteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';

export interface IFooterProps extends React.PropsWithChildren {
  className?: string;
  overrideDefaultContent?: boolean;
}

export default function Footer(props: IFooterProps) {
  return (
    <footer className={[styles.footer, props.className].join(' ')}>
      {props.overrideDefaultContent
        ? props.children
        : <div className={styles.footerContent}>
          <span>
            <StyledLink href={siteConfig.githubUrl} className={['hoverBGEffect'].join(' ')} style={{ padding: '0 2px' }}>Kyle Klus</StyledLink>
            {` © 2023-${new Date().getFullYear()}`}
          </span>
          <div className={styles.navLinkWrapper}>
            {props.children}
          </div>
        </div>
      }
    </footer>
  );
}
