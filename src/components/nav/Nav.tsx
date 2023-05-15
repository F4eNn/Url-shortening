import { Wrapper } from '../wrapper/Wrapper'
import classes from './Nav.module.scss'
import Image from 'next/image'
export const Nav = () => {
	return (
		<div className={classes['hero-bg']}>
			<Wrapper>
				<div className={classes.container}>
					<Image
						src='/images/logo.svg'
						alt=''
						width={121}
						height={33}
					/>
					<button className={`${classes.burger_btn}`}>
						<div className={classes.bar1}></div>
						<div className={classes.bar2}></div>
						<div className={classes.bar3}></div>
					</button>
				</div>
			</Wrapper>
		</div>
	)
}
