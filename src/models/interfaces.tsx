import { CSSProperties, SyntheticEvent } from 'react'

export interface ButtonProps {
	text: string
}
export interface LinkItems {
	id: string
	shortLink:string
	original: string
}
export interface InputValue {
	getInputValueHelper: (inputValue: string) => void
}