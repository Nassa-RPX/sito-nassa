import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { Header } from 'components/milestones/Header'

const NassaMilestone = (): JSX.Element => {
	const router = useRouter()
	const { nassa } = router.query

	return (
		<>
			<Header current={nassa as string} />
			{nassa}
		</>
	)
}

export default NassaMilestone
