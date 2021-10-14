import React, { useEffect } from 'react'

import { useGetMilestones } from 'app/hooks/useGetMilestones'
import { Children } from 'app/shared/types'

export const MilestoneContainer = ({ children }: Children): JSX.Element => {
	const store = useGetMilestones()

	return <>{children}</>
}
