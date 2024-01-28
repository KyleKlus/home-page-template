
import Image from 'next/image';
import Content from '@/lib/components/container/Content';
import styles from './LoadingPage.module.scss'
import logoImg from '@/lib/assets/KK_Logo.svg'

export default function Home() {
  return (
    <Content className={['applyHeaderOffset', styles.loadingPage, 'dotted'].join(' ')}>
      <div className={[styles.loadingImageWrapper].join(' ')} />
      <Image
        src={logoImg}
        alt="KK Logo"
        width={'84'}
        height={'84'}
        quality={100}
        className={[styles.loadingImage].join(' ')}
      />
    </Content>
  );
}
