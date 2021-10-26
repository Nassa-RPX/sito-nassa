import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import {
	MilestoneBig,
	MilestoneDescription,
	MilestoneSmall,
	MilestoneTitle
} from './Types'

import { IMilestonesFields } from 'app/shared/contentful'
import { capitalize } from 'app/utils/capitalize'

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
	const [position, setPosition] = useState<Position>('left')
	const milestoneBoxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (milestoneBoxRef.current) {
			setBoxHeight(milestoneBoxRef.current.clientHeight)
			setBoxWidth(milestoneBoxRef.current.clientWidth + 50)
		}
	}, [milestoneBoxRef.current])

	useEffect(() => {
		setPosition(positionInList % 2 === 0 ? 'left' : 'right')
	}, [positionInList])

	const formatDate = (date: string | undefined) => {
		return capitalize(dayjs(date).locale('it').format('MMMM YYYY'))
	}

	return (
		<Base position={position}>
			<MilestoneBall />
			{milestone.date && (
				<MilestoneDate position={position}>
					{formatDate(milestone.date)}
				</MilestoneDate>
			)}

			<Box position={position} height={boxHeight} width={boxWidth}>
				{!milestone.description && (
					<MilestoneSmall
						ref={milestoneBoxRef}
						position={position}
						height={boxHeight}
						key={milestone.date}
					>
						<MobileDate small>{formatDate(milestone.date)}</MobileDate>
						<MilestoneTitle position={position} small>
							{milestone.title}
						</MilestoneTitle>
					</MilestoneSmall>
				)}

				{milestone.description && (
					<MilestoneBig
						ref={milestoneBoxRef}
						position={position}
						height={boxHeight}
						key={milestone.date}
					>
						<MobileDate>{formatDate(milestone.date)}</MobileDate>
						<MilestoneTitle position={position}>
							{milestone.title}
						</MilestoneTitle>
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

const MilestoneDate = styled.span<{ position: Position }>`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(calc(-50% - 100px), -50%);
	transform: ${(props) =>
		props.position === 'left'
			? 'translate(calc(-50% - 100px), -50%)'
			: 'translate(calc(-50% + 100px), -50%);'};
	display: none;

	${up('lg')} {
		display: inline-block;
	}
`

const MobileDate = styled.div<{ small?: boolean }>`
	width: 100%;
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing(0.5)};
	font-size: ${({ theme }) => theme.typo.size.detail};
	color: ${(props) =>
		props.small
			? props.theme.palette.grayNassa
			: props.theme.palette.lightBlueNassa};

	${up('lg')} {
		display: none;
	}
`
