import classes from './LinkButton.module.scss'

interface ButtonProps {
	text: string
}

export const LinkButton = ({ text }: ButtonProps) => {
	return <button className={classes.button}>{text}</button>
}
