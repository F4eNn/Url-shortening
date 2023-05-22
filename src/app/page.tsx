import { Header } from '@/components/header/Header'
import { LinkGenerator } from '@/components/link-generator/LinkGenerator'
import { AdvanceSettings } from '@/components/advance-settings/AdvanceSettings'
import { Banner } from '@/components/bottom-banner/Banner'
import { Footer } from '@/components/footer/Footer'
const Page = () => {
	return (
		<>
			<Header />
			<main>
				<LinkGenerator />
				<AdvanceSettings />
				<Banner />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
export default Page
