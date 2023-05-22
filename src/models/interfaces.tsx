export interface FeaturesItems {
	image: string
	title: string
	description: string
	margin: string
}
export interface CopyFn {
	onCopy?: (e: React.MouseEvent) => void
}
export interface ButtonProps extends CopyFn {
	text: string
}
export interface LinkItems {
	id: string
	shortLink: string
	original: string
}
export interface CardItem extends CopyFn {
	original: string
	shorthened: string
	id: string
	onRemove: () => void
}
export interface InputValue {
	newItem: (inputValue: string) => void
}
