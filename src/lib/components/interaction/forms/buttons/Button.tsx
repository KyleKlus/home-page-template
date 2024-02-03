import { cn } from '@/lib/utils';
import styles from './Button.module.scss'
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react';

export const buttonVariants = cva(styles.buttonStyle,
	{
		variants: {
			variant: {
				unstyled: '',
				surface: '',
				surfacePlain: styles.plain,
				solid: styles.solid,
				solidPlain: styles.plainSolid,
				outline: styles.outline,
				outlinePlain: styles.plainOutline,
				soft: styles.soft,
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
					variant === 'unstyled' && className,
					variant !== 'unstyled' && buttonVariants({
						variant,
						width,
						justifyContent,
						radius,
						isActive,
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
