import './globals.scss'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/header/Header'
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '700'],
})

export const metadata = {
	title: 'li-nk',
	description: 'Creates shorter links than original',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				<div>{children}</div>
			</body>
		</html>
	)
}
