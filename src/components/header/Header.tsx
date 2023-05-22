/* eslint-disable react/no-unescaped-entities */
import { Wrapper } from '../UI/wrapper/Wrapper'
import { Nav } from './nav/Nav'
import { GetStarted } from '../UI/buttons/GetStarted'
import Image from 'next/image'
import classes from './Header.module.scss'
export const Header = () => {
	return (
		<header className={classes['header-bgc']}>
			<Wrapper>
				<Nav />
				<div className={classes['get-started-container']}>
					<div className={classes.description}>
						<h1>More than just shorter links</h1>
						<p>Build your brand's recognition and get detailed insights on how your links are performing</p>
						<GetStarted />
					</div>
					<div className={classes['img-box']}>
						<Image
							src='/images/illustration-working.svg'
							alt='working illustration'
							width={733}
							height={482}
						/>
					</div>
				</div>
			</Wrapper>
		</header>
	)
}
