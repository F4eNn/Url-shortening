import { CopyButton } from '@/components/UI/buttons/CopyButton'
import classes from './Link.module.scss'
import { CardItem } from '@/models/interfaces'
export const Link = ({ original, shorthened, id, onRemove, onCopy }: CardItem) => {
	return (
		<li
			id={id}
			className={classes.container}>
			<div className={classes['old-link-box']}>
				<p className={classes.old}>{original}</p>
			</div>
			<div className={classes['separate-line']}></div>
			<div className={classes['desktop-flex']}>
				<div className={classes['new-link-box']}>
					<p className={classes.shortened}>{shorthened}</p>
				</div>
				<div className={classes['copy-button-box']}>
					<CopyButton onCopy={onCopy} />
				</div>
				<div className={classes['remove-button-box']}>
					<button onClick={onRemove}>Remove</button>
				</div>
			</div>
		</li>
	)
}
