'use client'
import { useState, useEffect } from 'react'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinksContainer } from './shortened-links-box/LinksContainer'
import { Link } from './shortened-links-box/Link'
import { LinkItems } from '@/models/interfaces'
import styles from './shortened-links-box/Link.module.scss'
import classes from './LinkGenerator.module.scss'

const URL = 'https://api.shrtco.de/v2/shorten?url='

export const LinkGenerator = () => {
	const [newData, setNewData] = useState(() => {
		if (typeof window !== 'undefined') {
			const savedState = localStorage.getItem('MY_ITEMS')
			if (savedState) {
				const parseData = JSON.parse(savedState)
				return parseData
			}
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
				throw Error('Response problems, try different link.')
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
		} catch (error) {
			alert(error)
		}
	}

	const copyLink = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement
		const copyLink = target.closest('div')?.previousSibling?.textContent
		if (copyLink) {
			navigator.clipboard.writeText(copyLink)
			target.classList.add(`${styles['copied-bgc']}`)
			target.textContent = 'Copied!'
			setTimeout(() => {
				target.classList.remove(`${styles['copied-bgc']}`)
				target.textContent = 'Copy'
			}, 1000)
		}
	}

	const removeCard = (e?: React.MouseEvent) => {
		if (!e) return
		const target = e.target as HTMLElement
		const elementId = target.closest('li')?.id
		const removeRelevantCard = newData.filter((item: LinkItems) => item.id !== elementId)
		setNewData(removeRelevantCard)
	}
	const card = newData.map((item: LinkItems, index: number) => (
		<Link
			onCopy={copyLink}
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
