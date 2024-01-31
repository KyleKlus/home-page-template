/** @format */
import styles from './TextContainer.module.scss';
import { cn } from '@/lib/utils';
import React from 'react';
import { Text, textPropDefs } from '@radix-ui/themes';
import { Section } from '@radix-ui/themes';
import { SectionProps } from '@radix-ui/themes/dist/cjs/components/section';
import { TextProps } from '@radix-ui/themes/dist/cjs/components/text';

type TextElement = React.ElementRef<typeof Text>;

export type TextContainerProps = Omit<React.ComponentPropsWithoutRef<typeof Text>, 'as' | 'asChild'>;


const TextContainer = React.forwardRef<TextElement, TextContainerProps>(
  ({
    className, ...props
  }, ref) => {
    return <div className={cn(styles.text)}>
      <Text
        ref={ref}
         {...props}
        className={cn(className)}
      >
        {props.children}
      </Text>
    </div>;
  }
)


TextContainer.displayName = 'TextContainer';

export default TextContainer;