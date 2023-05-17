import { SyntheticEvent } from 'react'

export interface ButtonProps {
	text: string
	onFormSubmit?: (e: SyntheticEvent) => void
}
export interface NewLinks {
	short: string
	original: string
}
export interface InputValue {
	getInputValueHelper: (inputValue: string) => void
}