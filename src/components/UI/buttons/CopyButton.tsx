import { CopyFn } from '@/models/interfaces'
export const CopyButton = ({ onCopy }: CopyFn) => {
	return <button onClick={onCopy}>Copy</button>
}
