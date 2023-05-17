import classes from './LinkButton.module.scss'
import { ButtonProps } from '@/models/interfaces'

export const LinkButton = ({ text, onFormSubmit}: ButtonProps) => {
	return (
		<button
		onClick={onFormSubmit}
			className={classes.button}>
			{text}
		</button>
	)
}
