import { EntryCollection } from 'contentful'
import { useCallback, useEffect, useState } from 'react'

import { CONTENT_TYPE } from './../shared/contentful.d'

import { STATES } from 'app/data/constants'

import { client } from 'pages/_app'

export type API_STATE = 'idle' | 'loading' | 'success' | 'error'

export type Arguments = {
	type: CONTENT_TYPE
	fire?: boolean
}

export type ReturnType<T> = {
	content?: EntryCollection<T>
	error?: string
	state: API_STATE
}

export const useContentful = <T>({
	type,
	fire = true
}: Arguments): ReturnType<T> => {
	const [content, setContent] = useState<EntryCollection<T> | undefined>(
		undefined
	)

	const [localState, setLocalState] = useState<API_STATE>('idle')

	const [error, setError] = useState<string>()

	const call = useCallback(() => {
		setLocalState(STATES.IDLE)
		client
			.getEntries<T>({ content_type: type })
			.then((results) => {
				setContent(results)
				setLocalState(STATES.SUCCESS)
			})
			.catch((e: string) => {
				setError(e)
				setLocalState(STATES.ERROR)
			})
	}, [type])

	useEffect(() => {
		if (fire) call()
	}, [fire, call])

	return { content, error, state: localState }
}
