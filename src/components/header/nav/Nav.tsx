'use client'
import { useState, useEffect, useRef } from 'react'
import { Wrapper } from '../../wrapper/Wrapper'
import classes from './Nav.module.scss'
import Image from 'next/image'
export const Nav = () => {
	const [isActive, setIsActive] = useState(false)

	const menuRef = useRef<HTMLDivElement>(null)
	const showNavHandle = () => {
		setIsActive(!isActive)
	}
	useEffect(() => {
		

		const handler = (e: UIEvent) => {
			const target = e.target as HTMLDivElement
			if (!menuRef.current?.contains(target)) setIsActive(false)
		}

		document.addEventListener('mousedown', handler)
		return () => {
			document.removeEventListener('mousedown', handler)
		}
	})
	const addChangeClass = isActive ? `${classes.change}` : null
	const showMobileMenu = isActive ? null : `${classes['hide-nav-menu']}`

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

					<div ref={menuRef}>
						<button
							onClick={showNavHandle}
							className={`${classes['burger-btn']} ${addChangeClass}`}>
							<div className={classes.bar1}></div>
							<div className={classes.bar2}></div>
							<div className={classes.bar3}></div>
						</button>
						<div className={`${classes['mobile-nav']} ${showMobileMenu}`}>
							<ul>
								<li>
									<button>Features</button>
								</li>
								<li>
									<button>Pricing</button>
								</li>
								<li>
									<button>Resources</button>
								</li>
							</ul>
							<div className={classes['horizontal-line']}></div>
							<div className={classes['button-container']}>
								<button className={classes.login}>Login</button>
								<button className={classes.signup}>Sign Up</button>
							</div>
						</div>
					</div>
					<div className={classes['desktop-nav']}>
						<ul>
							<li>
								<button>Features</button>
							</li>
							<li>
								<button>Pricing</button>
							</li>
							<li>
								<button>Resources</button>
							</li>
						</ul>
						<div className={classes['button-container']}>
							<button className={classes.login}>Login</button>
							<button className={classes.signup}>Sign Up</button>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
