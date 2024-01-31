/** @format */
import React from 'react';
import styles from './Container.module.scss';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { Flex } from '@radix-ui/themes';

export interface IContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  width?: string,
  asChild?: boolean,
  outerClassName?: string
}

const Container = React.forwardRef<HTMLDivElement, IContainerProps>(
  ({
    asChild = false,
    children,
    outerClassName,
    className,
    width,
    style,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "div"

    return <div style={style} className={cn(styles.container, outerClassName)}>
        <Comp
          ref={ref} {...props}
          className={cn(styles.innerContainer, className)}
          style={{ maxWidth: width }}
        >
          {children}
        </Comp>
    </div>;
  }
)

Container.displayName = 'Container';

export default Container;