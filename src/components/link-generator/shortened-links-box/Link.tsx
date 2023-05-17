import classes from './Link.module.scss'
import { LinkButton } from '@/components/UI/link-button/LinkButton'
export const Link = ({original, shortened}: {original: string; shortened: string}) => {


	return (
		<li className={classes.container}>
			<div className={classes['old-link-box']}>
				<p className={classes.old}>{original}</p>
			</div>
			<div className={classes['separate-line']}></div>
			<div className={classes['desktop-flex']}>
				<div className={classes['new-link-box']}>
					<p className={classes.shortened}>{shortened}</p>
				</div>
				<div className={classes['button-box']}>
					<LinkButton text='Copy' />
				</div>
			</div>
		</li>
	)
}
