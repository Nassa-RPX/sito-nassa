import Head from 'next/head'

import { title } from 'app/data/info'

export default function Home() {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Nassa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			Enjoy Nassa!
		</>
	)
}
