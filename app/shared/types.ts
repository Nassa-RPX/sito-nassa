import { EntryCollection } from 'contentful'
import React from 'react'

import { IMilestonesFields } from './contentful'

export type Children = { children: React.ReactNode }

export type MenuToggle = { toggle: () => void }

export type ContentfulImage = {
	url: string
	details: {
		image?: {
			width: number
			height: number
		}
	}
}

export type MilestonesCollection = EntryCollection<IMilestonesFields>

export type MilestoneNassa = Record<
	string,
	Array<Omit<IMilestonesFields, 'nassa'>>
>

export type NassaObj = {
	id: string
	name: string
}
