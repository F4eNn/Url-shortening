import { Header } from '@/components/header/Header'
import { LinkGenerator } from '@/components/link-generator/LinkGenerator'
import { AdvanceSettings } from '@/components/advance-settings/AdvanceSettings'
const Page = () => {
	return (
		<>
			<Header />
			<main>
				<LinkGenerator />
				<AdvanceSettings />
			</main>
		</>
	)
}
export default Page
