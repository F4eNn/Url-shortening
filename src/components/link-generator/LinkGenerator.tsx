'use client'
import { useState, useEffect } from 'react'
import classes from './LinkGenerator.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinksContainer } from './shortened-links-box/LinksContainer'
const URL = 'https://api.shrtco.de/v2/shorten?url='
import { LinkItems } from '@/models/interfaces'


export const LinkGenerator = () => {
	const getDataFromLocalStorage = () => {
		const data = localStorage.getItem('MY_ITEMS')
		if (data) {
			const parseData = JSON.parse(data)
			return parseData
		}
		return []
	}
	const [inputValue, setInputValue] = useState('')
	const [newData, setNewData] = useState<LinkItems[]>(getDataFromLocalStorage)

	const onFormInputValueHelper = (inputValue: string) => {
		setInputValue(inputValue)
	}
	
	useEffect(() => {
		if (inputValue === '') return
		const getNewLink = async () => {
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
				const latestData = [...newData, relevantData]
				setNewData(latestData)
				localStorage.setItem('MY_ITEMS', JSON.stringify(latestData))
			} catch (error) {
				console.error(error)
			}
			
		}
		getNewLink()
		return () => {
			
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue ])
	// console.log(newData)




	return (
		<Wrapper>
			<div className={classes.generator}>
				<LinkForm getInputValueHelper={onFormInputValueHelper} />
				<LinksContainer linksArr={newData}/>
			</div>
		</Wrapper>
	)
}
