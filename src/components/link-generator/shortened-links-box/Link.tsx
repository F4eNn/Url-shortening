import classes from './Link.module.scss'
import { LinkButton } from '@/components/UI/link-button/LinkButton'
export const Link = () => {
	return (
		<li className={classes.container}>
			<div className={classes['old-link-box']}>
				<p className={classes.old}>https://www.linkedin.com/company/frontend-mentor</p>
			</div>
			<div className={classes['separate-line']}></div>
			<div className={classes['desktop-flex']}>
				<div className={classes['new-link-box']}>
					<p className={classes.shortened}>https://rel.ink/gxOXp9</p>
				</div>
				<div className={classes['button-box']}>
					<LinkButton text='Copy' />
				</div>
			</div>
		</li>
	)
}
