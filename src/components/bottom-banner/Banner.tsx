import classes from './Banner.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { GetStarted } from '../UI/buttons/GetStarted'
export const Banner = () => {
	return (
		<div className={classes['hero-bg']}>
			<Wrapper>
				<div className={classes.content}>
					<h2>Boost your links today</h2>
					<GetStarted />
				</div>
			</Wrapper>
		</div>
	)
}
