import { Link } from './Link'
import classes from './LinksContainer.module.scss'
import { useState, useEffect } from 'react'
import { LinkItems } from '@/models/interfaces'

export const LinksContainer = ({ linksArr }: { linksArr: { id: string; shortLink: string; original: string }[] }) => {
	const [card, setCard] = useState()

	useEffect(() => {
		const data = localStorage.getItem('MY_ITEMS')
		if (data) {
			const parseData = JSON.parse(data)
			const eachCard = parseData.map((item: LinkItems, index: number) => (
				<Link
					key={index}
					original={item.original}
					id={item.id}
					shortened={item.shortLink}
				/>
			))
			setCard(eachCard)
		}
		return () => {}
	}, [linksArr])

	return <ul className={classes.container}>{card}</ul>
}
