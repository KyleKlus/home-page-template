import { cn } from '@/lib/utils';
import styles from './Button.module.scss'
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react';
import highLightedLinkStyles from '@/lib/components/interaction/links/highlightedLink/HighlightedLink.module.scss'
import linkStyles from '@/lib/components/interaction/links/styledLink/StyledLink.module.scss'

export const buttonVariants = cva('',
	{
		variants: {
			variant: {
				unstyled: '',
				surface: styles.buttonStyle,
				surfacePlain: cn(styles.buttonStyle, styles.plain),
				solid: cn(styles.buttonStyle, styles.solid),
				solidPlain: cn(styles.buttonStyle, styles.plainSolid),
				outline: cn(styles.buttonStyle, styles.outline),
				outlinePlain: cn(styles.buttonStyle, styles.plainOutline),
				soft: cn(styles.buttonStyle, styles.soft),
				link: cn(styles.removeButtonStyles, linkStyles.styledLink),
				navigationLink: cn(highLightedLinkStyles.highlightedLink, styles.removeButtonStyles, styles.isNavigationLink),
			},
			width: {
				flex: '',
				fitContent: styles.fitContent,
				standard: styles.fitStandard,
				longStandard: styles.fitLongStandard
			},
			radius: {
				small: styles.small,
				medium: styles.medium,
				large: styles.large,
				full: styles.full,
			},
			justifyContent: {
				left: styles.justifyLeft,
				center: styles.justifyCenter,
				right: styles.justifyRight,
			},
			isActive: {
				true: styles.isActive,
				false: ''
			}
		},
		defaultVariants: {
			variant: "surface",
			radius: "small",
			justifyContent: "center",
			width: 'flex',
			isActive: false
		},
	}
)

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean,
	isActive?: boolean,
	hasIcon?: boolean,
	text?: string,
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
	({
		className,
		variant,
		width,
		justifyContent,
		radius,
		hasIcon = false,
		isActive = false,
		asChild = false,
		text,
		...props
	}, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				{...props}
				ref={ref}
				className={cn(
					styles.buttonPreset,
					hasIcon && styles.hasIcon,
					isActive && variant === 'navigationLink' && highLightedLinkStyles.isHighlighted,
					isActive && variant !== 'navigationLink' && styles.isActive,
					buttonVariants({
						variant,
						width,
						justifyContent,
						radius,
						className
					})
				)}
			>
				{props.children}
				{hasIcon && text !== undefined &&
					<span>{text}</span>
				}
			</Comp>
		);
	}
)

Button.displayName = "Button";

export default Button;
