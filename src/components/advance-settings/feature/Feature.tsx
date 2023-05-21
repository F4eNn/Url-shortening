import classes from './Feature.module.scss'
import Image from 'next/image'

export const Feature = ({ image, title, description }: { image: string; title: string; description: string }) => {
	return (
			<div className={classes.box}>
				<div>{title}</div>
				<Image
					src={image}
					alt=''
					width={50}
					height={50}
				/>
				<div>{description}</div>
			</div>
	)
}
