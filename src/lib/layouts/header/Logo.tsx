/** @format */

import styles from './Logo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push('https://kyleklus.de/');
      }}
      className={[styles.logoWrapper].join(' ')}
    >
      <Image
        src={process.env.basePath + "/KK_Logo.svg"}
        alt="KK Logo"
        width={'42'}
        height={'42'}
        quality={100}
        className={[].join(' ')}
      ></Image>
      <p>Kyle Klus</p>
    </div>
  );
}
