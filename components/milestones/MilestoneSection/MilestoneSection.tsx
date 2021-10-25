import { motion } from 'framer-motion'
import types from 'next'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Milestone } from './Milestone'

import { IMilestonesFields } from 'app/shared/contentful'

type MilestoneArray = Array<Omit<IMilestonesFields, 'nassa'>>

export type Props = {
	nassa?: MilestoneArray
	milestoneType?: string
}

export type TypeNumber = {
	small: number
	big: number
}

export const MilestoneSection = ({ nassa }: Props): JSX.Element => {
	const [timelineHeight, setTimelineHeight] = useState<number>(0)

	const baseHeightRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (baseHeightRef.current)
			setTimelineHeight(baseHeightRef.current.clientHeight)
	}, [baseHeightRef.current])

	return (
		<Base ref={baseHeightRef}>
			<MilestoneTimeline
				initial={{ height: 0 }}
				animate={{ height: timelineHeight }}
			/>

			{nassa &&
				nassa.map((milestone, idx) => (
					<Milestone key={idx} milestone={milestone} positionInList={idx} />
				))}
		</Base>
	)
}

const Base = styled.section`
	margin-top: ${({ theme }) => theme.spacing(-1)};
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`

const MilestoneTimeline = styled(motion.span)`
	position: absolute;
	width: 4px;
	background-color: ${({ theme }) => theme.palette.yellowNassa};
	top: -10px;
	left: 50%;
	transform: translateX(-50%);
`
