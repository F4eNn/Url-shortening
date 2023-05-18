import { Link } from './Link'
import classes from './LinksContainer.module.scss'
import { useState, useEffect } from 'react'
let eachLink: any

interface LinksObj {
	linkArr: {
		id: string
		short: string
		original: string
	}
}

export const LinksContainer = ({ newList }: any) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const newItem = localStorage.getItem('MY_ITEMS')
		if (newItem) {
			const parseItem = JSON.parse(newItem)
			setData(parseItem)
		}
		return () => {
			console.log('Clean UP')
			setData(null)
		}
	}, [])
	console.log(data)
	return <ul className={classes.container}>{newList.current}</ul>
}
