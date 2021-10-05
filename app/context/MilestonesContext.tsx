import React, { useState } from 'react'

import { MilestoneNassa, Children } from 'app/shared/types'

export type IMilestonesContext = {
	milestones: MilestoneNassa
	setMilestones?: (milestones: MilestoneNassa) => void
}

export const defaultState: IMilestonesContext = {
	milestones: {}
}

export const MilestonesContext = React.createContext<IMilestonesContext>(
	defaultState
)

export const MilestonesProvider = ({ children }: Children) => {
	const [milestonesState, setMilestonesState] = useState<MilestoneNassa>(
		defaultState.milestones
	)

	const setMilestonesContext = (milestones: MilestoneNassa) =>
		setMilestonesState(milestones)

	return (
		<MilestonesContext.Provider
			value={{
				milestones: milestonesState,
				setMilestones: setMilestonesContext
			}}
		>
			{children}
		</MilestonesContext.Provider>
	)
}
