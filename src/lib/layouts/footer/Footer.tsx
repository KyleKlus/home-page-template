/** @format */

import Link from 'next/link';
import styles from './Footer.module.css';
import { defaultSiteConfig } from '@/app/defaultSiteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';

interface IFooterProps {
  className?: string;
  overrideContent?: React.ReactNode;
}

export default function Footer(props: React.PropsWithChildren<IFooterProps>) {
  return (
    <footer className={[styles.footer, props.className].join(' ')}>
      {props.overrideContent
        ? props.overrideContent
        : <div className={styles.footerContent}>
          <span>
            {'Copyright © 2024 '}
            <StyledLink href={defaultSiteConfig.githubUrl} className={['hoverBGEffect'].join(' ')} style={{ padding: '0 2px' }}>Kyle Klus</StyledLink>
          </span>
          <div className={styles.navLinkWrapper}>
            <StyledLink href={defaultSiteConfig.heropageUrl} className={styles.footerNavLink}>Home</StyledLink>
            <StyledLink href={defaultSiteConfig.portfoliopageUrl} className={styles.footerNavLink}>Portfolio</StyledLink>
            <StyledLink href={defaultSiteConfig.aboutpageUrl} className={styles.footerNavLink}>About</StyledLink>
            <StyledLink href={defaultSiteConfig.githubUrl} className={styles.footerNavLink}>GitHub</StyledLink>
            <StyledLink href={defaultSiteConfig.linkedinUrl} className={styles.footerNavLink}>LinkedIn</StyledLink>
            <StyledLink href={defaultSiteConfig.kofiUrl} className={styles.footerNavLink}>Ko-fi</StyledLink>
            <StyledLink href={defaultSiteConfig.contactUrl} className={styles.footerNavLink}>Contact</StyledLink>
            <StyledLink href={defaultSiteConfig.privacyUrl} className={styles.footerNavLink}>Privacy</StyledLink>
            <StyledLink href={defaultSiteConfig.termsOfServiceUrl} className={styles.footerNavLink}>Terms of Service</StyledLink>
            {props.children}
          </div>
        </div>
      }
    </footer>
  );
}
