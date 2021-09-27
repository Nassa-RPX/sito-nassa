import Head from 'next/head'

import Navbar from 'components/Navbar'
import Root from 'components/Root'

export default function Home() {
	return (
		<Root>
			<Head>
				<title>Nassa</title>
				<meta name="description" content="Nassa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			Enjoy Nassa!
		</Root>
	)
}
