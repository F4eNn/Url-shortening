import { Link } from './Link'
import classes from './LinksContainer.module.scss'
import { useState, useEffect } from 'react'
import { LinkItems } from '@/models/interfaces'

export const LinksContainer = ({ linksArr }: { linksArr: { id: string ; shortLink: string; original: string }[] }) => {
	const [card, setCard] = useState()
	const [deletedArr, setDeletedArr] = useState<LinkItems[]>([])
	
	useEffect(() => {
		const data = window.localStorage.getItem('MY_ITEMS')
		if (data) {
			const parseData = JSON.parse(data)
			const eachCard = parseData.map((item: any, index: number) => (
				<Link
					onClick={removeCard}
					key={index}
					original={item.original}
					id={item.id}
					shortened={item.shortLink}
					/>
					))
					console.log('use effect')
			setCard(eachCard)
		}
		return () => {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [linksArr, deletedArr])

	const removeCard = (e?: React.MouseEvent) => {
		if (!e) return
		const target = e.target as HTMLElement
		const elementId = target.closest('li')?.id
		const data = window.localStorage.getItem('MY_ITEMS')
		if(data){
			const parseData = JSON.parse(data)
			const newArray = parseData.filter((item:any) => item.id !== elementId)
			setDeletedArr(newArray)
			localStorage.setItem('MY_ITEMS', JSON.stringify(newArray))
			
		}
		
		
		console.log('zwykła funkcja')
	}

	return <ul className={classes.container}>{card}</ul>
}
