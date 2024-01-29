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
				// destructive:,
				// ghost: "hover:bg-accent hover:text-accent-foreground",
				// link: "text-primary underline-offset-4 hover:underline",
			},
			radius: {
				small: styles.small,
				medium: styles.medium,
				large: styles.large,
				full: styles.full,
			},
		},
		defaultVariants: {
			variant: "surface",
			radius: "small",
		},
	}
)

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean,
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
	({ className, variant, radius, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				{...props}
				ref={ref}
				className={cn(
					styles.buttonPreset,
					variant === 'unstyled' && className,
					variant !== 'unstyled' && buttonVariants({ variant, radius, className })
				)}
			>
				{props.children}
			</Comp>
		);
	}
)

Button.displayName = "Button";

export default Button;
