import React from 'react'

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
