import Link from 'next/link'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

import { useGetMilestones } from 'app/hooks/useGetMilestones'
import { NassaObj } from 'app/shared/types'
import { useMilestoneStore } from 'app/store/useMilestoneStore'
import { getUniques } from 'app/utils/getUniques'

export const Header = (): JSX.Element => {
	const { list } = useMilestoneStore()

	useGetMilestones()

	return (
		<Base>
			<MilestoneHeader>
				<Title>Milestones</Title>
			</MilestoneHeader>
			{list && (
				<NassaList>
					{list.map((el, idx) => (
						<NassaEl key={el.id}>
							<Link href={`/milestones/${el.id}`}>{el.name}</Link>
						</NassaEl>
					))}
				</NassaList>
			)}
		</Base>
	)
}

const Base = styled.section``

const MilestoneHeader = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.h1`
	font-family: ${({ theme }) => theme.typo.family.heading};
	font-size: ${({ theme }) => theme.typo.size.heading1};
	color: ${({ theme }) => theme.palette.blueNassa};
`

const NassaList = styled.ul`
	list-style: none;
`

const NassaEl = styled.li`
	font-size: ${({ theme }) => theme.typo.size.heading3};
	color: ${({ theme }) => theme.palette.grayNassa};
	margin-top: ${({ theme }) => theme.spacing(0.5)}; ;
`
