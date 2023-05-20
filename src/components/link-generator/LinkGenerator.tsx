'use client'
import { useState, useEffect } from 'react'
import classes from './LinkGenerator.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinksContainer } from './shortened-links-box/LinksContainer'
import { LinkItems } from '@/models/interfaces'
import { Link } from './shortened-links-box/Link'
const URL = 'https://api.shrtco.de/v2/shorten?url='

export const LinkGenerator = () => {
	const [newData, setNewData] = useState<any>(() => {
		const savedState = localStorage.getItem('MY_ITEMS')
		if (savedState) {
			const parseData = JSON.parse(savedState)
			return parseData
		}
		return []
	})
	useEffect(() => {
		localStorage.setItem('MY_ITEMS', JSON.stringify(newData))
	}, [newData])

	const getNewLink = async (inputValue: string) => {
		try {
			const response = await fetch(URL + inputValue)

			if (!response.ok) {
				throw Error('Response problems')
			}

			const data = await response.json()
			const relevantData = {
				id: data.result.code,
				shortLink: data.result.short_link,
				original: data.result.original_link,
			}
			const newItem = newData.slice()
			newItem.push(relevantData)
			setNewData(newItem)
			// console.log(newItem)
		} catch (error) {
			console.error(error)
		}
	}
	const copyLink = () => {
		
	}

	const removeCard = (e?: React.MouseEvent) => {
		if (!e) return
		const target = e.target as HTMLElement
		const elementId = target.closest('li')?.id
		const removeRelevantCard = newData.filter((item: any) => item.id !== elementId)
		setNewData(removeRelevantCard)
	}
	const card = newData.map((item: any, index: number) => (
		<Link
			onRemove={removeCard}
			key={index}
			id={item.id}
			original={item.original}
			shorthened={item.shortLink}
		/>
	))
	return (
		<Wrapper>
			<div className={classes.generator}>
				<LinkForm newItem={getNewLink} />
				<LinksContainer cardItem={card} />
			</div>
		</Wrapper>
	)
}
