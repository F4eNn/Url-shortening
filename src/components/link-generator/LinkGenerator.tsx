import classes from './LinkGenerator.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinkButton } from '../UI/link-button/LinkButton'
import { LinksContainer } from './shortened-links-box/LinksContainer'
export const LinkGenerator = () => {
	return (
		<Wrapper>
			<div className={classes.generator}>
				<div className={classes['form-container']}>
					<LinkForm />
					<div className={classes['button-box']}>
						<LinkButton text='Shorten It!' />
					</div>
				</div>
				<LinksContainer />
			</div>
		</Wrapper>
	)
}
