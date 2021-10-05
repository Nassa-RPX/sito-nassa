import React from 'react'

import { STATES } from 'app/data/constants'
import { useGetMilestones } from 'app/hooks/useGetMilestones'

import { Loading } from 'components/Loading'
import { Header } from 'components/milestones/Header'

const Milestones = (): JSX.Element => {
	const { apiState } = useGetMilestones()

	return (
		<>
			{apiState === STATES.SUCCESS && (
				<>
					<Header />
				</>
			)}
			{apiState === STATES.LOADING && <Loading />}
		</>
	)
}

export default Milestones
