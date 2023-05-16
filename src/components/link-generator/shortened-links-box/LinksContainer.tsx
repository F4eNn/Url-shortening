import { Link } from './Link'
import classes from './LinksContainer.module.scss'

let eachLink: any

export const LinksContainer = () => {
	return (
		<ul className={classes.container}>
			<Link />
			<Link />
			<Link />
			{eachLink}
		</ul>
	)
}
