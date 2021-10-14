import create from 'zustand'

import { STATES } from 'app/data/constants'
import { API_STATE } from 'app/hooks/useContentful'
import {
	MilestoneNassa,
	MilestonesCollection,
	NassaObj
} from 'app/shared/types'

type StoreType = {
	milestones?: MilestonesCollection
	setMilestones: (milestones: MilestonesCollection) => void

	map?: MilestoneNassa
	setMap: (map: MilestoneNassa) => void

	list?: NassaObj[]
	setList: (list: NassaObj[]) => void
}

export const useMilestoneStore = create<StoreType>((set) => ({
	milestones: undefined,
	setMilestones: (milestones: MilestonesCollection) => set({ milestones }),

	map: undefined,
	setMap: (map: MilestoneNassa) => set({ map }),

	list: undefined,
	setList: (list: NassaObj[]) => set({ list })
}))
