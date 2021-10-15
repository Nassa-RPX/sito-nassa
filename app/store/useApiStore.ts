import create from 'zustand'

import { STATES } from 'app/data/constants'
import { API_STATE } from 'app/hooks/useContentful'
import { CONTENT_TYPE } from 'app/shared/contentful'

type StoreType = {
	apiState: API_STATE
	currentApis?: Map<CONTENT_TYPE, API_STATE>
	setCurrentApis: (type: CONTENT_TYPE, state: API_STATE) => void
	setApiState: (type: CONTENT_TYPE, state: API_STATE) => void

	clearState: () => void
}

export const useApiStore = create<StoreType>((set, get) => ({
	apiState: STATES.IDLE,
	currentApis: undefined,

	setCurrentApis: (type: CONTENT_TYPE, apiState: API_STATE) => {
		if (!get().currentApis)
			set(() => ({ currentApis: new Map<CONTENT_TYPE, API_STATE>() }))

		set((state) => ({
			currentApis: state.currentApis?.set(type, apiState)
		}))
	},

	setApiState: (type: CONTENT_TYPE, apiState: API_STATE) => {
		get().setCurrentApis(type, apiState)
		let res: API_STATE = STATES.IDLE

		const current = get().currentApis

		if (current && current.size > 0) {
			current.forEach((value) => {
				if (value === STATES.ERROR) res = STATES.ERROR
				if (value === STATES.LOADING && res !== STATES.ERROR)
					res = STATES.LOADING
				if (value === STATES.SUCCESS && res === STATES.IDLE)
					res = STATES.SUCCESS
			})
		}

		set(() => ({ apiState: res }))
	},

	clearState: () => set({ apiState: STATES.IDLE, currentApis: undefined })
}))
