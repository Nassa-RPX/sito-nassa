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
		<Base position={rightOrLeft(positionInList)}>
			<MilestoneBall />

			<MilestoneSmall
				position={rightOrLeft(positionInList)}
				key={milestone.date}
			>
				{milestone.title}
			</MilestoneSmall>
		</Base>
	)
}

const Base = styled.div<{ position: Position }>`
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing(2)};
	width: 100%auto;
`

const MilestoneBall = styled.span`
	width: 30px;
	height: 30px;
	background-color: ${({ theme }) => theme.palette.whiteNassa};
	border-radius: 100%;
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};

	z-index: 3;

	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	position: absolute;
`

const MilestoneSmall = styled.div<{ position: Position }>`
	/* width: 300px; */
	/* margin-bottom: ${({ theme }) => theme.spacing(2)}; */
	padding: ${(props) =>
		props.position === 'left'
			? props.theme.spacing(1, 1, 1, 3)
			: props.theme.spacing(1, 3, 1, 1)};
	margin-left: ${(props) => (props.position === 'right' ? '300px' : 'inherit')};
	margin-right: ${(props) => (props.position === 'left' ? '300px' : 'inherit')};
	background: transparent;
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};
	border-radius: 4px;
`
