import { useCallback, useEffect } from 'react'

import { API_STATE, useContentful } from './useContentful'

import { IMilestonesFields } from 'app/shared/contentful'
import { MilestoneNassa, NassaObj } from 'app/shared/types'
import { useMilestoneStore } from 'app/store/useMilestoneStore'
import { getUniques } from 'app/utils/getUniques'

export const useGetMilestones = (): { apiState: API_STATE } => {
	const { content, apiState } = useContentful<IMilestonesFields>({
		type: 'milestones'
	})

	const { setMap, setMilestones, milestones, setList } = useMilestoneStore()

	const mapMilestones = useCallback(() => {
		if (!content) return

		const map: MilestoneNassa = {}

		content.items
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

		setMap(map)
	}, [content])

	useEffect(() => {
		content && setMilestones(content)
	}, [content])

	useEffect(() => {
		content && mapMilestones()
	}, [content, mapMilestones])

	const mapNassaList = () => {
		if (!milestones) return

		const mapNassa: Array<NassaObj> = milestones.items.map((milestone) => {
			return {
				id: milestone.fields.nassa[0].fields.id,
				name: milestone.fields.nassa[0].fields.name
			}
		})
		setList(getUniques<NassaObj>(mapNassa, 'id'))
	}

	useEffect(() => {
		milestones && mapNassaList()
	}, [milestones])

	return { apiState }
}
