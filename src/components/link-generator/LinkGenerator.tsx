'use client'
import { useState, useEffect } from 'react'
import classes from './LinkGenerator.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinksContainer } from './shortened-links-box/LinksContainer'
const URL = 'https://api.shrtco.de/v2/shorten?url='

interface links {
	short: string
	original: string
}

export const LinkGenerator = () => {
	const [inputValue, setInputValue] = useState('')

	const [isLinkArray, setIsLinkArray] = useState<links[]>([])

	const onFormInputValueHelper = (inputValue: string) => {
		setInputValue(inputValue)
	}

	useEffect(() => {
		if (inputValue === '') return
		const converLink = async () => {
			try {
				const response = await fetch(URL + inputValue)
				if (!response.ok) {
					throw Error('Respone problems')
				}
				const data = await response.json()
				const shortLink = data.result.full_short_link
				const originalLink = data.result.original_link

				const transformedLinks = {
					short: shortLink,
					original: originalLink,
				}
				const testArr = Array()
				
				window.localStorage.setItem('LIST_OF_LINKS', JSON.stringify(isLinkArray))
				setIsLinkArray(current => [...current, transformedLinks])
			} catch (error) {
				// alert(error)
			}
		}
		converLink()
		return () => {
			setInputValue('')
			// setIsLinkArray([current => ...current])
		}
	}, [inputValue, isLinkArray])

	useEffect(() => {
		const data = window.localStorage.getItem('LIST_OF_LINKS')
		if (data !== null){} 
	},[])

	return (
		<Wrapper>
			<div className={classes.generator}>
				<LinkForm getInputValueHelper={onFormInputValueHelper} />
				<LinksContainer />
			</div>
		</Wrapper>
	)
}
