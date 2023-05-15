import { Wrapper } from '../wrapper/Wrapper'
import classes from './nav.module.scss'
import Image from 'next/image'
export const Nav = () => {
	return (
		<div className={classes.box}>
			<Wrapper>
				<Image
					src='/images/logo.svg'
					alt=''
					width={121}
					height={33}
				/>
				<button className={classes['burger-btn']}></button>
			</Wrapper>
		</div>
	)
}
