import classes from './Link.module.scss'
import { LinkButton } from '@/components/UI/link-button/LinkButton'
export const Link = ({original, shorthened, id, onRemove}: {original: string; shorthened: string; id: string, onRemove: () => void}) => {


	return (
		<li id={id} className={classes.container}>
			<div className={classes['old-link-box']}>
				<p className={classes.old}>{original}</p>
			</div>
			<div className={classes['separate-line']}></div>
			<div className={classes['desktop-flex']}>
				<div className={classes['new-link-box']}>
					<p className={classes.shortened}>{shorthened}</p>
				</div>
				<div className={classes['button-box']}>
					<LinkButton text='Copy' />
				</div>
				<div className={classes['remove-button-box']}>
					<button onClick={onRemove}>Remove</button>
				</div>
			</div>
		</li>
	)
}
