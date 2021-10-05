import { EntryCollection } from 'contentful'
import create from 'zustand'

import { IMilestonesFields } from 'app/shared/contentful'
import { MilestoneNassa, NassaObj } from 'app/shared/types'

type StoreType = {
	milestones?: EntryCollection<IMilestonesFields>
	setMilestones: (milestones: EntryCollection<IMilestonesFields>) => void

	map: MilestoneNassa
	setMap: (map: MilestoneNassa) => void

	list: NassaObj[]
	setList: (list: NassaObj[]) => void
}

export const useMilestoneStore = create<StoreType>((set) => ({
	milestones: undefined,
	setMilestones: (milestones: EntryCollection<IMilestonesFields>) =>
		set({ milestones }),

	map: {},
	setMap: (map: MilestoneNassa) => set({ map }),

	list: [],
	setList: (list: NassaObj[]) => set({ list })
}))
