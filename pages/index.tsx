import Head from 'next/head'

import { title } from 'app/data/info'

import { Navbar } from 'components/Navigation/Navbar'
import { Root } from 'components/Root'

export default function Home() {
	return (
		<Root>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Nassa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			Enjoy Nassa!
		</Root>
	)
}
