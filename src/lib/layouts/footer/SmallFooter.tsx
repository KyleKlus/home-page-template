/** @format */
import Footer, { IFooterProps } from './Footer';
import styles from './SmallFooter.module.css';

export interface ISmallFooterProps extends IFooterProps {
}

export default function SmallFooter(props: React.PropsWithChildren<ISmallFooterProps>) {
  return (
    <Footer {...props} className={[styles.smallFooter, props.className].join(' ')}>
      {props.children}
    </Footer>
  );
}
