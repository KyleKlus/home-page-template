/** @format */
import styles from './Content.module.css';

interface IContentProps {
  id?: string;
  className?: string
  style?: React.CSSProperties;
}

export default function Content(props: React.PropsWithChildren<IContentProps>) {
  return <div id={props.id} className={[styles.content, props.className].join(' ')} style={props.style}>{props.children}</div>;
}
