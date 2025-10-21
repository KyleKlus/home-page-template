/** @format */

import { siteConfig } from '@/siteConfig';
import StyledLink from '@/lib/interaction/links/StyledLink';
import BigFooter from './BigFooter';
import styles from './SiteMapFooter.module.css';
import footerStyles from './Footer.module.css';

export interface ISiteMapFooterProps extends React.PropsWithChildren {
  className?: string;
}

export default function SiteMapFooter(props: ISiteMapFooterProps) {
  return (
    <BigFooter className={[styles.siteMapFooter, props.className].join(' ')} overrideDefaultContent={true}>
      <div className={styles.siteMapWrapper}>
        <div className={[styles.linkList].join(' ')}>
          <h5>Sites</h5>
          <StyledLink href={siteConfig.heropageUrl} >Home</StyledLink>
          <StyledLink href={siteConfig.portfoliopageUrl}>Portfolio</StyledLink>
          <StyledLink href={siteConfig.aboutpageUrl}>About</StyledLink>
          <StyledLink href={siteConfig.cookbookENUrl}>Cookbook 🇬🇧</StyledLink>
          <StyledLink href={siteConfig.cookbookENUrl}>Cookbook 🇩🇪</StyledLink>
          <StyledLink href={siteConfig.projectsUrl}>Projects 🛠️</StyledLink>
        </div>
        <div className={[styles.linkList].join(' ')}>
          <h5>Web Apps</h5>
          <StyledLink href={siteConfig.receiptManagerUrl}>Receipt Manager 🧾</StyledLink>
          <StyledLink href={siteConfig.textToolsUrl}>Text Tools 📝</StyledLink>
          <StyledLink href={siteConfig.qrCodeGeneratorUrl}>QR Code Generator 📱</StyledLink>
        </div>
        <div className={[styles.linkList].join(' ')}>
          <h5>Social</h5>
          <StyledLink href={siteConfig.githubUrl}>GitHub</StyledLink>
          <StyledLink href={siteConfig.linkedinUrl}>LinkedIn</StyledLink>
          <StyledLink href={siteConfig.kofiUrl}>Ko-fi (Donations)</StyledLink>
        </div>
        <div className={[styles.linkList].join(' ')}>
          <h5>Legal</h5>
          <StyledLink href={siteConfig.contactUrl}>Contact</StyledLink>
          <StyledLink href={siteConfig.privacyUrl}>Privacy</StyledLink>
          <StyledLink href={siteConfig.termsOfServiceUrl}>Terms of Service</StyledLink>
        </div>
      </div>
      <span>
        <StyledLink href={siteConfig.githubUrl} className={['hoverBGEffect'].join(' ')} style={{ padding: '0 2px' }}>Kyle Klus</StyledLink>
        {` © 2023-${new Date().getFullYear()}`}
      </span>
    </BigFooter >
  );
}
