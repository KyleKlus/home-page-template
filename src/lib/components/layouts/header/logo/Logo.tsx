/** @format */

import Image from 'next/image';
import router from 'next/router';

import styles from './Logo.module.scss';

import logoImg from '@/lib/assets/KK_Logo.svg';


export default function Logo() {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push('https://kyleklus.github.io/');
      }}
      className={[styles.logoWrapper].join(' ')}
    >
      <Image
        src={logoImg}
        alt="KK Logo"
        width={'42'}
        height={'42'}
        quality={100}
        className={[].join(' ')}
      />
      <p>Kyle Klus</p>
    </div>
  );
}
