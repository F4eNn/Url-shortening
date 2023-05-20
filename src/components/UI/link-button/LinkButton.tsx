import classes from './LinkButton.module.scss'
import { ButtonProps } from '@/models/interfaces'

export const LinkButton = ({ text }: ButtonProps) => {
	return (
		<button
			type='submit'
			className={classes.button}>
			{text}
		</button>
	)
}
