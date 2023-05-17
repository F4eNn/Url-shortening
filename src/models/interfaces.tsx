import { SyntheticEvent } from 'react'

export interface ButtonProps {
	text: string
	onFormSubmit?: (e: SyntheticEvent) => void
}
export interface InputValue {
	getInputValue: (inputValue: string) => void
}