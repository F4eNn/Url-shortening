import classes from './LinkButton.module.scss'
import { ButtonProps } from '@/models/interfaces'

export const LinkButton = ({ text}: ButtonProps) => {
	return (
		<button
			className={classes.button}>
			{text}
		</button>
	)
}
