import Image from 'next/image';

import styles from './Logo.module.css';
import logo from './KK_Logo.svg'
import { defaultSiteConfig } from '@/app/defaultSiteConfig';

export default function Logo() {
  return (
    <a
      href={defaultSiteConfig.url}
      className={[styles.logoWrapper].join(' ')}
    >
      <Image
        src={logo}
        alt="KK Logo"
        width={'42'}
        height={'42'}
        quality={100}
      />
      <span>Kyle Klus</span>
    </a>
  );
}
