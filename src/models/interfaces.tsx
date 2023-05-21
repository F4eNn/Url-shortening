

export interface ButtonProps {
	text: string
	onCopy?: (e: React.MouseEvent) => void 
}
export interface LinkItems {
	id: string
	shortLink:string
	original: string
}
export interface CardItem {
	original: string
	shorthened: string
	id: string
	onRemove: () => void
	onCopy: (e: React.MouseEvent) => void
}
export interface InputValue {
	newItem: (inputValue: string) => void
}