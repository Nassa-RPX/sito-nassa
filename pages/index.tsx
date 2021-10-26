import Head from 'next/head'
import { useEffect, useState } from 'react'

import { STATES } from 'app/data/constants'
import { title } from 'app/data/info'
import { API_STATE, useContentful } from 'app/hooks/useContentful'
import { IIntroductionFields, INassaFields } from 'app/shared/contentful'
import { isApiError, isApiLoading, isApiSuccess } from 'app/utils/isApiState'

import { Error } from 'components/Error'
import { Base } from 'components/Layout'
import { Loading } from 'components/Loading'
import { Hero } from 'components/home/Hero'
import { NassaList } from 'components/home/NassaList'

export default function Home() {
	/* ----------------------------- API ----------------------------- */

	const {
		content: introductionInfo,
		state: introductionState
	} = useContentful<IIntroductionFields>({
		type: 'introduction'
	})

	const { content: nassaInfo, state: nassaState } = useContentful<INassaFields>(
		{
			type: 'nassa'
		}
	)

	/* ----------------------------- STATES ----------------------------- */

	const [apiState, setApiState] = useState<API_STATE>(STATES.IDLE)

	/* ----------------------------- EFFECTS ----------------------------- */

	useEffect(() => {
		if (isApiSuccess(introductionState) && isApiSuccess(nassaState))
			setApiState(STATES.SUCCESS)

		if (isApiError(introductionState) || isApiError(nassaState))
			setApiState(STATES.ERROR)

		if (isApiLoading(introductionState) || isApiLoading(nassaState))
			setApiState(STATES.LOADING)
	}, [introductionState, nassaState])

	/* ----------------------------- VIEWS ----------------------------- */

	const Success = () => {
		return (
			<>
				<Head>
					<title>{title}</title>
					<meta name="description" content="Nassa" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Hero introductionInfo={introductionInfo} />
				<NassaList nassaInfo={nassaInfo} />
			</>
		)
	}

	/* ----------------------------- MAIN ----------------------------- */

	return (
		<Base direction="column" centerX>
			{apiState === STATES.LOADING && <Loading />}
			{apiState === STATES.ERROR && <Error />}
			{apiState === STATES.SUCCESS && <Success />}
		</Base>
	)
}
