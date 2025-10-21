/** @format */

import styles from './Footer.module.css';
import { siteConfig } from '@/siteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';
import SmallFooter, { ISmallFooterProps } from './SmallFooter';

interface IQuickInfoFooterProps extends ISmallFooterProps {
}

export default function QuickInfoFooter(props: IQuickInfoFooterProps) {
  return (
    <SmallFooter {...props} className={[props.className].join(' ')}>
      <StyledLink href={siteConfig.githubUrl} className={styles.footerNavLink}>GitHub</StyledLink>
      <StyledLink href={siteConfig.linkedinUrl} className={styles.footerNavLink}>LinkedIn</StyledLink>
      <StyledLink href={siteConfig.aboutpageUrl} className={styles.footerNavLink}>About</StyledLink>
      <StyledLink href={siteConfig.contactUrl} className={styles.footerNavLink}>Contact</StyledLink>
      <StyledLink href={siteConfig.kofiUrl} className={styles.footerNavLink}>Ko-fi(Donations)</StyledLink>
      <StyledLink href={siteConfig.privacyUrl} className={styles.footerNavLink}>Privacy</StyledLink>
      <StyledLink href={siteConfig.termsOfServiceUrl} className={styles.footerNavLink}>Terms of Service</StyledLink>
      {props.children}
    </SmallFooter>
  );
}
