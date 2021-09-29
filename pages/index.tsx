import Head from 'next/head'

import { Hero } from './home/Hero'
import { NassaList } from './home/NassaList'

import { title } from 'app/data/info'

import { Base } from 'components/Layout'

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
