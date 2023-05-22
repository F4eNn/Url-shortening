import { Wrapper } from '../UI/wrapper/Wrapper'
import { Feature } from './feature/Feature'
import classes from './AdvanceSettings.module.scss'
export const AdvanceSettings = () => {
	const features = [
		{
			title: 'Brand Recognition',
			description:
				"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
			image: './images/icon-brand-recognition.svg',
		},
		{
			title: 'Detailed Records',
			description:
				'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
			image: './images/icon-detailed-records.svg',
		},
		{
			title: 'Fully Customizable',
			description:
				'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
			image: './images/icon-fully-customizable.svg',
		},
	]
	return (
		<Wrapper>
			<div className={classes['statistics-container']}>
				<div className={classes.description}>
					<h2>Advance statistics</h2>
					<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
				</div>
				<div className={classes.features}>
					<div className={classes['blue-line-container']}>
						<div className={classes.line}></div>
					</div>
					<Feature
						description={features[0].description}
						image={features[0].image}
						title={features[0].title}
						margin='2rem'
					/>
					<Feature
						description={features[1].description}
						image={features[1].image}
						title={features[1].title}
						margin='5rem'
					/>
					<Feature
						description={features[2].description}
						image={features[2].image}
						title={features[2].title}
						margin='8rem'
					/>
				</div>
			</div>
		</Wrapper>
	)
}
