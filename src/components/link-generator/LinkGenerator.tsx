'use client'
import { useState, useEffect, useRef } from 'react'
import classes from './LinkGenerator.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinksContainer } from './shortened-links-box/LinksContainer'
import { Link } from './shortened-links-box/Link'
const URL = 'https://api.shrtco.de/v2/shorten?url='

interface links {
	id: string
	short: string
	original: string
}

export const LinkGenerator = () => {
	const [inputValue, setInputValue] = useState('')
	const onFormInputValueHelper = (inputValue: string) => {
		setInputValue(inputValue)
	}
	const eachLink = useRef(null)
	useEffect(() => {
		if (inputValue === '') return
		const converLink = async () => {
			try {
				const response = await fetch(URL + inputValue)
				if (!response.ok) {
					throw Error('Response problems')
				}
				const data = await response.json()
				const shortLink = data.result.full_short_link
				const originalLink = data.result.original_link
				const id = data.result.code
				const transformedLinks = {
					id: id,
					short: shortLink,
					original: originalLink,
				}
				let newArr = []
				newArr.push(transformedLinks)
				const oldData = localStorage.getItem('MY_ITEMS')
				if (!oldData) {
					localStorage.setItem('MY_ITEMS', JSON.stringify(newArr))
				}
				if (oldData) {
					const newData = JSON.parse(oldData)
					localStorage.setItem('MY_ITEMS', JSON.stringify([...newData, transformedLinks]))
				}

				const latestArray = localStorage.getItem('MY_ITEMS')
				if (latestArray) {
					const parseLatestArray = JSON.parse(latestArray)
					const listItem = getData(parseLatestArray)
					eachLink.current = listItem
				}
			} catch (error) {
				// alert(error)
			}
		}
		converLink()
	}, [inputValue])

	const getData = (params: any) => {
		const listItem = params.map((item: any, index: number) => (
			<Link
				key={index}
				original={item.original}
				shortened={item.short}
				id={item.id}
			/>
		))
		return listItem
	}

	return (
		<Wrapper>
			<div className={classes.generator}>
				<LinkForm getInputValueHelper={onFormInputValueHelper} />
				<LinksContainer newList={eachLink}/>
			</div>
		</Wrapper>
	)
}
