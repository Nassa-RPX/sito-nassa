import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { useMilestoneStore } from 'app/store/useMilestoneStore'

type Props = {
	current?: string
}

export const Header = ({ current = 'nassa-onu' }: Props): JSX.Element => {
	const { list } = useMilestoneStore()

	return (
		<Base>
			<MilestoneHeader>
				<Title>Milestones</Title>
			</MilestoneHeader>
			{list && (
				<NassaList>
					{list.map((el, idx) => (
						<NassaEl key={el.id}>
							<Link href={`/milestones/${el.id}`} passHref>
								<a className={el.id === current ? 'active' : ''}>{el.name}</a>
							</Link>
						</NassaEl>
					))}
				</NassaList>
			)}
		</Base>
	)
}

const Base = styled.section`
	z-index: 3;
`

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
	margin-top: ${({ theme }) => theme.spacing(0.5)};

	& .active {
		font-weight: bold;
		color: ${({ theme }) => theme.palette.yellowNassa};
	}
`
