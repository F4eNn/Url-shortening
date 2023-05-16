'use client'

import { useState } from 'react'
import classes from './LinkForm.module.scss'
export const LinkForm = () => {
	const [isValid, setIsValid] = useState(true)

	const addInvalidClass = isValid ? classes.invalid : ''
	const addErrorMsg = isValid ? <p className={classes.error}>Please add a link</p> : null
	return (
		<form className={classes.form}>
			<input
				className={addInvalidClass}
				type='text'
				placeholder='Shorten a link here...'
			/>
			{addErrorMsg}
		</form>
	)
}
