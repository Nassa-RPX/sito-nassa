import Head from 'next/head'

import { title } from 'app/data/info'

import { Base } from 'components/Layout'
import { Hero } from 'components/home/Hero'
import { NassaList } from 'components/home/NassaList'

export default function Home() {
	return (
		<Base direction="column" centerX>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Nassa" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<NassaList />
		</Base>
	)
}
