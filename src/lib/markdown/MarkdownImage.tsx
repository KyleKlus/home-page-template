/** @format */
import styles from './MarkdownSection.module.css';

interface IMarkdownImageProps {
  className?: string;
  title: string;
  alt: string;
  src: string;
}

export default function MarkdownImage(props: React.PropsWithChildren<IMarkdownImageProps>) {
  return <span className={[styles.markdownImage, props.className].join(' ')}>
    <img src={props.src} alt={props.alt} title={props.title} />
  </span>;
}
