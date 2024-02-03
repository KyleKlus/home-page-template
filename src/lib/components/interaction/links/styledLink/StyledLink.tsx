import React from 'react';
import styles from './StyledLink.module.scss';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Button, { buttonVariants } from "@/lib/components/interaction/forms/buttons/Button";
import { type VariantProps } from "class-variance-authority"

export type LinkElement = React.ElementRef<typeof Link>;

export interface StyledLinkProps
    extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof buttonVariants> {
    buttonClassName?: string,
    asButton?: boolean,
    hasIcon?: boolean,
    text?: string,
};

const StyledLink = React.forwardRef<LinkElement, StyledLinkProps>(
    ({ className, children, href, asButton = false, hasIcon = false, text, variant, radius, justifyContent, width, buttonClassName, ...props }, ref) => {

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
                                    styles.styledLink,
                                    hasIcon && styles.hasIcon,
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
                                styles.styledLink,
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

StyledLink.displayName = 'StyledLink';

export default StyledLink;