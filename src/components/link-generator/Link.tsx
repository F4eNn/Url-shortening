import classes from './Link.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinkButton } from '../UI/link-button/LinkButton'
export const Link = () => {
	return (
		<Wrapper>
			<div className={classes['form-container']}>
				<LinkForm />
				<div className={classes['button-box']}>
					<LinkButton text='Shorten It!' />
				</div>
			</div>
		</Wrapper>
	)
}
