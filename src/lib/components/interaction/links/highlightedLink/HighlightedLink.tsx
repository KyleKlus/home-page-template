import React from 'react';
import styles from './HighlightedLink.module.scss';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Button, { buttonVariants } from "@/lib/components/interaction/forms/buttons/Button";
import { type VariantProps } from "class-variance-authority"

export type LinkElement = React.ElementRef<typeof Link>;

export interface HighlightedLinkProps
    extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof buttonVariants> {
    buttonClassName?: string,
    isHighlighted?: boolean,
    asButton?: boolean,
    hasIcon?: boolean,
    text?: string,
};

const HighlightedLink = React.forwardRef<LinkElement, HighlightedLinkProps>(
    ({ className, children, href, asButton = false, hasIcon = false, text, variant, radius, justifyContent, width, buttonClassName, isHighlighted, ...props }, ref) => {

        return (
            <>
                {
                    asButton
                        ? < Button
                            style={{ padding: '0px !important' }}
                            width={width}
                            variant={variant}
                            radius={radius}
                            justifyContent={justifyContent}
                            className={cn(buttonClassName)}
                        >
                            <Link
                                {...props}
                                href={href}
                                className={cn(
                                    styles.highlightedLink,
                                    hasIcon && styles.hasIcon,
                                    isHighlighted && styles.isHighlighted,
                                    asButton && styles.isButton,
                                    className
                                )}
                                ref={ref}
                            >
                                {children}
                                {hasIcon && text !== undefined &&
                                    <span>{text}</span>
                                }
                            </Link>
                        </ Button >
                        : <Link
                            {...props}
                            href={href}
                            className={cn(
                                styles.highlightedLink,
                                isHighlighted && styles.isHighlighted,
                                asButton && styles.isButton,
                                className
                            )}
                            ref={ref}
                        >
                            {children}
                        </Link>
                }
            </>
        );
    }
)

HighlightedLink.displayName = 'HighlightedLink';

export default HighlightedLink;