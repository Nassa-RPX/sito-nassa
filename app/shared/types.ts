import { EntryCollection } from 'contentful'
import React from 'react'

import {
	IIntroductionFields,
	IMilestonesFields,
	INassaFields,
	IContactsFields
} from './contentful'

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
export type NassaCollection = EntryCollection<INassaFields>
export type IntroductionCollection = EntryCollection<IIntroductionFields>
export type ContactsCollection = EntryCollection<IContactsFields>

export type MilestoneNassa = Record<
	string,
	Array<Omit<IMilestonesFields, 'nassa'>>
>

export type NassaObj = {
	id: string
	name: string
}

export type Position = 'right' | 'left'
