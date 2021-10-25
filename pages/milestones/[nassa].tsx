import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { STATES } from 'app/data/constants'
import { useContentful } from 'app/hooks/useContentful'
import { mapMilestones } from 'app/lib/milestones'
import { IMilestonesFields } from 'app/shared/contentful'
import { MilestoneNassa } from 'app/shared/types'

import { Error } from 'components/Error'
import { Loading } from 'components/Loading'
import { Header } from 'components/milestones/Header'
import { MilestoneContainer } from 'components/milestones/MilestoneContainer'
import { MilestoneSection } from 'components/milestones/MilestoneSection/MilestoneSection'

const Milestones = (): JSX.Element => {
	const router = useRouter()
	const { nassa } = router.query

	const { content, state, error } = useContentful<IMilestonesFields>({
		type: 'milestones'
	})

	const [map, setMap] = useState<MilestoneNassa>()

	useEffect(() => {
		if (!content) return
		const mapped = mapMilestones(content)
		setMap(mapped)
	}, [content])

	const SuccessView = () => {
		return (
			<Base>
				<Header current={typeof nassa === 'string' ? nassa : 'nassa-onu'} />
				<MilestoneSection
					nassa={
						map
							? map[typeof nassa === 'string' ? nassa : 'nassa-onu']
							: undefined
					}
				/>
			</Base>
		)
	}

	return (
		<MilestoneContainer>
			{state === STATES.LOADING && <Loading />}
			{state === STATES.ERROR && <Error />}
			{state === STATES.SUCCESS && <SuccessView />}
		</MilestoneContainer>
	)
}

export default Milestones

const Base = styled.main`
	display: flex;
	flex-direction: column;
`
