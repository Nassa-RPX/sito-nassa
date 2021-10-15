import Head from 'next/head'

import { title } from 'app/data/info'
import { useContentful } from 'app/hooks/useContentful'
import { IIntroductionFields, INassaFields } from 'app/shared/contentful'

import { Base } from 'components/Layout'
import { Page } from 'components/Page'
import { Hero } from 'components/home/Hero'
import { NassaList } from 'components/home/NassaList'

export default function Home() {
	const { content: introductionInfo } = useContentful<IIntroductionFields>({
		type: 'introduction'
	})

	const { content: nassaInfo } = useContentful<INassaFields>({ type: 'nassa' })

	return (
		<Page>
			<Base direction="column" centerX>
				<Head>
					<title>{title}</title>
					<meta name="description" content="Nassa" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Hero introductionInfo={introductionInfo} />
				<NassaList nassaInfo={nassaInfo} />
			</Base>
		</Page>
	)
}
