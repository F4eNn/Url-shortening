'use client'
import classes from './LinkGenerator.module.scss'
import { Wrapper } from '../UI/wrapper/Wrapper'
import { LinkForm } from './LinkForm'
import { LinksContainer } from './shortened-links-box/LinksContainer'
export const LinkGenerator = () => {
	const onFormHandler = (inputValue: string | undefined) => {
		console.log(inputValue + ' Wartość z generatora')
	}

	return (
		<Wrapper>
			<div className={classes.generator}>
				<LinkForm getInputValue={onFormHandler}/>
				<LinksContainer />
			</div>
		</Wrapper>
	)
}
