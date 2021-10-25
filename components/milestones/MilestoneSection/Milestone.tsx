import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { IMilestonesFields } from 'app/shared/contentful'

export type Props = {
	milestone: Omit<IMilestonesFields, 'nassa'>
	positionInList: number
}

export type Position = 'right' | 'left'

export const Milestone = ({
	milestone,
	positionInList
}: Props): JSX.Element => {
	const rightOrLeft = (currentPosition: number): Position =>
		currentPosition % 2 === 0 ? 'right' : 'left'

	return (
		<MilestoneSmall position={rightOrLeft(positionInList)} key={milestone.date}>
			{milestone.title}
		</MilestoneSmall>
	)
}

const MilestoneSmall = styled.div<{ position: Position }>`
	/* width: 300px; */
	margin-bottom: ${({ theme }) => theme.spacing(2)};
	margin-left: ${(props) => (props.position === 'left' ? '-300px' : '300px')};
	padding: ${(props) =>
		props.position === 'left'
			? props.theme.spacing(1, 1, 1, 3)
			: props.theme.spacing(1, 3, 1, 1)};
	background: transparent;
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};
	border-radius: 4px;
`
