'use client'
import { useState, useRef} from 'react'
import classes from './LinkForm.module.scss'
import { FormElem } from '@/models/types'

export const LinkForm = () => {
	const expression =
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
	const regex = new RegExp(expression)
	const [isEmpty, setIsEmpty] = useState(false)
	const [isInvalid, setIsInvalid] = useState(false)
	const input = useRef<HTMLInputElement>(null)

	const clearInput = () => {
		input.current!.value = ''
	}
	const handleFocus = () => {
		input.current?.blur()
	}
	const checkInputValidation = (e: FormElem) => {
		e.preventDefault()
		const inputValue = input.current?.value

		if (inputValue?.trim() === '') {
			setIsInvalid(false)
			setIsEmpty(true)
			handleFocus()
		} else if (!inputValue?.match(regex)) {
			setIsEmpty(false)
			setIsInvalid(true)
			handleFocus()
		} else {
			setIsInvalid(false)
			setIsEmpty(false)
			clearInput()
		}
	}
	const addInvalidClass = isEmpty || isInvalid ? classes.invalid : ''
	const addEmptyInputMsg = isEmpty ? <p className={classes.error}>Please add a link</p> : null
	const addInvalidLinktMsg = isInvalid ? <p className={classes.error}>Please provide a valid link</p> : null
	return (
		<form
			onSubmit={checkInputValidation}
			className={classes.form}>
			<input
				ref={input}
				className={addInvalidClass}
				type='text'
				placeholder='Shorten a link here...'
			/>
			{addEmptyInputMsg}
			{addInvalidLinktMsg}
		</form>
	)
}
