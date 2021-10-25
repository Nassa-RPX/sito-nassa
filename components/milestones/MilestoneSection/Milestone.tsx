import React, { useEffect, useRef, useState } from 'react'
import { up } from 'styled-breakpoints'
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
	const [boxHeight, setBoxHeight] = useState<number>(0)
	const [boxWidth, setBoxWidth] = useState<number>(0)
	const milestoneBoxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (milestoneBoxRef.current) {
			setBoxHeight(milestoneBoxRef.current.clientHeight)
			setBoxWidth(milestoneBoxRef.current.clientWidth + 50)
		}
	}, [milestoneBoxRef.current])

	const rightOrLeft = (currentPosition: number): Position =>
		currentPosition % 2 === 0 ? 'left' : 'right'

	return (
		<Base position={rightOrLeft(positionInList)}>
			<MilestoneBall />

			<Box
				position={rightOrLeft(positionInList)}
				height={boxHeight}
				width={boxWidth}
			>
				{!milestone.description && (
					<MilestoneSmall
						ref={milestoneBoxRef}
						position={rightOrLeft(positionInList)}
						height={boxHeight}
						key={milestone.date}
					>
						<MilestoneTitle small>{milestone.title}</MilestoneTitle>
					</MilestoneSmall>
				)}

				{milestone.description && (
					<MilestoneBig
						ref={milestoneBoxRef}
						position={rightOrLeft(positionInList)}
						height={boxHeight}
						key={milestone.date}
					>
						<MilestoneTitle>{milestone.title}</MilestoneTitle>
						<MilestoneDescription>{milestone.description}</MilestoneDescription>
					</MilestoneBig>
				)}
			</Box>
		</Base>
	)
}

const Base = styled.div<{ position: Position }>`
	position: relative;
	margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const MilestoneBall = styled.span`
	width: 30px;
	height: 30px;
	background-color: ${({ theme }) => theme.palette.whiteNassa};
	border-radius: 100%;
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};

	z-index: 3;

	left: 50%;
	top: 40px;
	transform: translate(-50%, -50%);

	position: absolute;
	${up('lg')} {
		top: 50%;
	}
`

const Box = styled.div<{ position: Position; height: number; width: number }>`
	margin-top: 40px;
	${up('lg')} {
		padding: ${(props) =>
			props.position === 'left'
				? props.theme.spacing(1, 1, 1, 3)
				: props.theme.spacing(1, 3, 1, 1)};
		margin-left: ${(props) =>
			props.position === 'left' ? props.width + 'px' : 'inherit'};
		margin-right: ${(props) =>
			props.position === 'right' ? props.width + 'px' : 'inherit'};
		margin-top: inherit;
	}
`

const MilestoneTitle = styled.h3<{ small?: boolean }>`
	font-size: ${({ theme }) => theme.typo.size.heading3};
	font-weight: bold;

	margin-bottom: ${(props) =>
		props.small ? 'inherit' : props.theme.spacing(0.4)};

	color: ${(props) =>
		props.small
			? props.theme.palette.blueNassa
			: props.theme.palette.whiteNassa};
`

const MilestoneDescription = styled.div`
	color: ${({ theme }) => theme.palette.lightBlueNassa};
	font-size: ${({ theme }) => theme.typo.size.detail};
`

const MilestoneBase = styled.div<{ position: Position; height: number }>`
	padding: ${({ theme }) => theme.spacing(1)};
	border-radius: 4px;
	position: relative;
	max-width: 300px;

	${up('lg')} {
		padding: ${(props) =>
			props.position === 'right'
				? props.theme.spacing(1, 1, 1, 3)
				: props.theme.spacing(1, 3, 1, 1)};
	}
`

const MilestoneSmall = styled(MilestoneBase)`
	background: ${({ theme }) => theme.palette.whiteNassa};
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};

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

const MilestoneBig = styled(MilestoneBase)`
	background: ${({ theme }) => theme.palette.blueNassa};
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};

	position: relative;

	${up('lg')} {
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			width: 30px;
			height: 4px;
			background-color: ${({ theme }) => theme.palette.blueNassa};
			left: ${(props) => (props.position === 'left' ? '-30px' : 'inherit')};
			right: ${(props) => (props.position === 'right' ? '-30px' : 'inherit')};
			bottom: 50%;
			transform: translateY(50%)
				${(props) => (props.position === 'right' ? 'rotate(180deg)' : '')};
		}
	}
`
