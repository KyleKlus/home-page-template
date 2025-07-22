/** @format */
import styles from './Card.module.css';

interface ICardProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Card(props: React.PropsWithChildren<ICardProps>) {
  return (
    <div className={styles.card + ' ' + props.className} style={props.style}>{props.children}</div>
  );
}
