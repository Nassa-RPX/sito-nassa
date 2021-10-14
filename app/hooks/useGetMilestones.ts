import { EntryCollection } from 'contentful'
import { useEffect, useState } from 'react'

import { useApiStore } from './../store/useApiStore'
import { API_STATE, useContentful } from './useContentful'

import { mapMilestones, mapNassaList } from 'app/lib/milestones'
import { IMilestonesFields } from 'app/shared/contentful'
import {
	MilestoneNassa,
	MilestonesCollection,
	NassaObj
} from 'app/shared/types'
import { useMilestoneStore } from 'app/store/useMilestoneStore'

type ReturnType = {
	apiState: API_STATE
	milestones?: MilestonesCollection
	map?: MilestoneNassa
	list?: NassaObj[]
}

export const useGetMilestones = (): ReturnType => {
	const apiStore = useApiStore()
	const { content, apiState } = useContentful<IMilestonesFields>({
		type: 'milestones'
	})

	const milestoneStore = useMilestoneStore()

	useEffect(() => {
		apiStore.setApiState('milestones', apiState)
	}, [apiState])

	useEffect(() => {
		content && milestoneStore.setMilestones(content)
		content && milestoneStore.setMap(mapMilestones(content))
		content && milestoneStore.setList(mapNassaList(content))
	}, [content])

	return {
		apiState: apiStore.apiState,
		milestones: milestoneStore.milestones,
		map: milestoneStore.map,
		list: milestoneStore.list
	}
}
