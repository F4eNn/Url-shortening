import { CSSProperties, SyntheticEvent } from 'react'

export interface ButtonProps {
	text: string
	onCopy?: (e: React.MouseEvent) => void 
}
export interface LinkItems {
	id: string
	shortLink:string
	original: string
}
export interface InputValue {
	getInputValueHelper: (inputValue: string) => void
}