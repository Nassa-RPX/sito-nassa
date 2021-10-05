import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { useMilestoneStore } from 'app/store/useMilestoneStore'

import { Header } from 'components/milestones/Header'

const NassaMilestone = (): JSX.Element => {
	const router = useRouter()
	const { nassa } = router.query

	const { map } = useMilestoneStore()

	console.log('map zustand', nassa, map)

	return (
		<>
			<Header />
			{nassa}
		</>
	)
}

export default NassaMilestone
