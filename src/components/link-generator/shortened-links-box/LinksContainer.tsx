import classes from './LinksContainer.module.scss'

export const LinksContainer = ({ cardItem }: any) => {
	return <ul className={classes.container}>{cardItem}</ul>
}
