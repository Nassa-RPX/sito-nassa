import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'

const NassaMilestone = (): JSX.Element => {
	const router = useRouter()
	const { nassa } = router.query

	return (
		<Base>
			<span>{nassa}</span>
		</Base>
	)
}

export default NassaMilestone

const Base = styled.div``
