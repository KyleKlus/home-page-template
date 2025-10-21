/** @format */

import Footer, { IFooterProps } from './Footer';
import styles from './BigFooter.module.css';

export interface IBigFooterProps extends IFooterProps {
}

export default function BigFooter(props: IBigFooterProps) {
  return (
    <Footer {...props} className={[styles.bigFooter, props.className].join(' ')}>
      {props.children}
    </Footer>
  );
}
