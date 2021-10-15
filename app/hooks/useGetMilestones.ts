import { useEffect } from 'react'

import { useApiStore } from './../store/useApiStore'
import { useContentful } from './useContentful'

import { mapMilestones, mapNassaList } from 'app/lib/milestones'
import { IMilestonesFields } from 'app/shared/contentful'
import {
	MilestoneNassa,
	MilestonesCollection,
	NassaObj
} from 'app/shared/types'
import { useMilestoneStore } from 'app/store/useMilestoneStore'

type ReturnType = {
	milestones?: MilestonesCollection
	map?: MilestoneNassa
	list?: NassaObj[]
}

export const useGetMilestones = (): ReturnType => {
	const { content } = useContentful<IMilestonesFields>({
		type: 'milestones'
	})

	const milestoneStore = useMilestoneStore()

	useEffect(() => {
		content && milestoneStore.setMilestones(content)
		content && milestoneStore.setMap(mapMilestones(content))
		content && milestoneStore.setList(mapNassaList(content))
	}, [content])

	return {
		milestones: milestoneStore.milestones,
		map: milestoneStore.map,
		list: milestoneStore.list
	}
}
