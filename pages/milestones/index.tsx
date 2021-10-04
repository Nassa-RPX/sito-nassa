import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { useContentful } from 'app/hooks/useContentful'
import { IMilestonesFields } from 'app/shared/contentful'
import { getUniques } from 'app/utils/getUniques'

type NassaObj = {
	id: string
	name: string
}

type MilestoneNassa = Record<string, Array<Omit<IMilestonesFields, 'nassa'>>>

const Milestones = (): JSX.Element => {
	const { content: milestones, apiState } = useContentful<IMilestonesFields>({
		type: 'milestones'
	})

	const [nassaList, setNassaList] = useState<Array<NassaObj>>()
	const [milestonesMap, setMilestonesMap] = useState<MilestoneNassa>()

	const mapNassaList = useCallback(() => {
		if (!milestones) return

		const mapNassa: Array<NassaObj> = milestones.items.map((milestone) => {
			return {
				id: milestone.fields.nassa[0].fields.id,
				name: milestone.fields.nassa[0].fields.name
			}
		})
		setNassaList(getUniques<NassaObj>(mapNassa, 'id'))
	}, [milestones])

	const mapMilestones = useCallback(() => {
		if (!milestones) return

		const map: MilestoneNassa = {}

		milestones.items
			.map((milestone) => {
				return {
					nassa: milestone.fields.nassa[0].fields.id,
					title: milestone.fields.title,
					description: milestone.fields.description,
					date: milestone.fields.date
				}
			})
			.forEach((mapped) => {
				const toAdd = {
					title: mapped.title,
					description: mapped.description,
					date: mapped.date
				}

				if (map[mapped.nassa]) map[mapped.nassa].push(toAdd)
				else map[mapped.nassa] = [toAdd]
			})

		setMilestonesMap
	}, [milestones])

	useEffect(() => {
		if (!milestones) return
		mapNassaList()
	}, [milestones, mapNassaList])

	useEffect(() => {
		if (!milestones) return
		mapMilestones()
	}, [milestones, mapMilestones])

	return (
		<Base>
			<MilestoneHeader>
				<Title>Milestones</Title>
				<NassaList>
					{nassaList &&
						nassaList.map((nassa) => (
							<NassaEl key={nassa.id}>
								<Link href={`/milestones/${nassa.id}`}>{nassa.name}</Link>
							</NassaEl>
						))}
				</NassaList>
			</MilestoneHeader>
		</Base>
	)
}

export default Milestones

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
