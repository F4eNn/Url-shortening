import './globals.scss'
import React from 'react'
import { Poppins } from 'next/font/google'
// import { Header } from '@/components/header/Header'
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '700'],
})

export const metadata = {
	title: 'li-nk',
	description: 'Creates shorter links than original',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>
			<body className={poppins.className}>
				<div>{children}</div>
			</body>
		</html>
	)
}
