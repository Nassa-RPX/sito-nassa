import React, { useEffect, useRef, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { IMilestonesFields } from 'app/shared/contentful'

export type Props = {
	milestone: Omit<IMilestonesFields, 'nassa'>
	positionInList: number
}

export type Position = 'right' | 'left'

const isLeft = (position: Position) => (position === 'left' ? true : false)

export const Milestone = ({
	milestone,
	positionInList
}: Props): JSX.Element => {
	const [boxHeight, setBoxHeight] = useState<number>(0)
	const milestoneBoxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (milestoneBoxRef.current)
			setBoxHeight(milestoneBoxRef.current.clientHeight)
	}, [milestoneBoxRef.current])

	const rightOrLeft = (currentPosition: number): Position =>
		currentPosition % 2 === 0 ? 'left' : 'right'

	return (
		<Base position={rightOrLeft(positionInList)}>
			<MilestoneBall />

			<Box position={rightOrLeft(positionInList)} height={boxHeight}>
				<MilestoneSmall
					ref={milestoneBoxRef}
					position={rightOrLeft(positionInList)}
					height={boxHeight}
					key={milestone.date}
				>
					{milestone.title}
				</MilestoneSmall>
			</Box>
		</Base>
	)
}

const Base = styled.div<{ position: Position }>`
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing(1)};
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

const Box = styled.div<{ position: Position; height: number }>`
	margin-top: ${(props) => props.height}px;
	${up('lg')} {
		padding: ${(props) =>
			props.position === 'left'
				? props.theme.spacing(1, 1, 1, 3)
				: props.theme.spacing(1, 3, 1, 1)};
		margin-left: ${(props) =>
			props.position === 'left' ? '250px' : 'inherit'};
		margin-right: ${(props) =>
			props.position === 'right' ? '250px' : 'inherit'};
		margin-top: inherit;
	}
`

const MilestoneSmall = styled.div<{ position: Position; height: number }>`
	padding: ${({ theme }) => theme.spacing(1)};
	background: ${({ theme }) => theme.palette.whiteNassa};
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};
	border-radius: 4px;

	position: relative;

	${up('lg')} {
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 20px 20px 20px 0;
			border-color: transparent ${({ theme }) => theme.palette.blueNassa}
				transparent transparent;
			left: ${(props) => (props.position === 'left' ? '-20px' : 'inherit')};
			right: ${(props) => (props.position === 'right' ? '-20px' : 'inherit')};
			bottom: 50%;
			transform: translateY(50%)
				${(props) => (props.position === 'right' ? 'rotate(180deg)' : '')};
		}
	}
`
