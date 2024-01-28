import { cn } from '@/lib/utils';
import styles from './Button.module.scss'

interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'solid' | 'surface' | 'outline' | 'unstyled',
	radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
}

const Button: React.FC<IButtonProps> = (props) => {
	return (
		<button
			type='button'
			{...props}
			className={cn(
				props.className,
				(props.variant === undefined ||
					props.variant !== 'unstyled') && styles.buttonStyle,
				props.radius === 'full' && styles.full
			)}
		>
			{props.children}
		</button>
	);
}

export default Button;
