import Button from "@/lib/components/interaction/forms/buttons/Button";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import styles from './LinkButton.module.scss'
import highLightedLinkStyles from '@/lib/components/interaction/links/highlightedLink/HighlightedLink.module.scss'
import linkStyles from '@/lib/components/interaction/links/styledLink/StyledLink.module.scss'

export const linkVariants = cva(styles.removeButtonStyles,
    {
        variants: {
            linkVariant: {
                link: linkStyles.styledLink,
                navigation: cn(highLightedLinkStyles.highlightedLink, styles.isNavigationLink),
            }
        },
        defaultVariants: {
            linkVariant: "link",
        },
    }
)

export interface ILinkButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof linkVariants> {
}

const LinkButton = React.forwardRef<HTMLButtonElement, ILinkButtonProps>(
    ({
        className,
        children,
        linkVariant,
        ...props
    }, ref) => {
        return (
            <Button
                {...props}
                ref={ref}
                className={cn(
                    className,
                    linkVariants({ linkVariant })
                )}
                variant={'unstyled'}
            >
                {children}
            </Button>
        );
    }
)

LinkButton.displayName = "LinkButton";

export default LinkButton;
