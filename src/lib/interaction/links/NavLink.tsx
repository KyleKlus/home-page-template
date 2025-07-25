/** @format */

import styles from './NavLink.module.css';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';

interface INavLinkProps {
  className?: string;
  pathName: string;
  displayText: string;
}

/**
 * A link, which shows if it leads to the current page
 * @param props
 * @returns
 */

export default function NavLink(props: React.PropsWithChildren<INavLinkProps>) {
  const router = useRouter();
  const lastBasePathElement: string = router ? router.basePath.split('/').reverse()[0].replace('#', '') : '';
  const lastPathNameElement: string = router ? router.pathname.split('/').reverse()[0].replace('#', '') : '';
  const lastPropsPathNameElement: string = props.pathName ? props.pathName.split('/').reverse()[0].replace('#', '') : '';

  const styleClass =
    (lastPropsPathNameElement.length === 0 && lastPathNameElement.length === 0) ||
      (lastPropsPathNameElement.length !== 0 && lastPathNameElement.length !== 0 && lastPropsPathNameElement.indexOf(lastPathNameElement) !== -1) ||
      (lastPropsPathNameElement.length === 0 && lastBasePathElement.length === 0) ||
      (lastPropsPathNameElement.length !== 0 && lastBasePathElement.length !== 0 && lastPropsPathNameElement.indexOf(lastBasePathElement) !== -1)
      ? styles.isCurrentWindow
      : '';

  return (
    <Link
      className={styles.navLink + ' ' + styleClass + ' ' + props.className}
      href={props.pathName}
    >
      {props.displayText}
    </Link>
  );
}
