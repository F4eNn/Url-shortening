import { Link } from './Link'
import classes from './LinksContainer.module.scss'
import { NewLinks } from '@/models/interfaces'
let eachLink: any

interface LinksObj {
	linkArr: {
		short: string
		original: string
	}
}

export const LinksContainer = () => {

	








	return <ul className={classes.container}>{eachLink}</ul>
}
