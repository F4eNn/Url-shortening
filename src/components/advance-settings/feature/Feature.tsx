import Image from 'next/image'
import classes from './Feature.module.scss'
import { FeaturesItems } from '@/models/interfaces'

export const Feature = ({ image, title, description, margin }: FeaturesItems) => {
	return (
		<div
			className={classes.container}
			style={{ marginTop: `${margin}` }}>
			<div className={classes['image-box']}>
				<Image
					src={image}
					alt=''
					width={35}
					height={35}
				/>
			</div>
			<div className={classes['features-description']}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
