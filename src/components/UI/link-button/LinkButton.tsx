import classes from './LinkButton.module.scss'
import { ButtonProps } from '@/models/interfaces'

export const LinkButton = ({ text, onCopy }: ButtonProps) => {
	return (
		<button
			onClick={onCopy}
			type='submit'
			className={classes.button}>
			{text}
		</button>
	)
}
