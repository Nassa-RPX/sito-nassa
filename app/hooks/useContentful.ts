import { EntryCollection } from 'contentful'
import { useCallback, useEffect, useState } from 'react'

import { CONTENT_TYPE } from './../shared/contentful.d'

import { client } from 'app/client'

export type API_STATE = 'idle' | 'loading' | 'success' | 'error'

export type Arguments = {
	type: CONTENT_TYPE
	fire?: boolean
}

export type ReturnType<T> = {
	content?: EntryCollection<T>
	apiState: API_STATE
	error?: string
}

export const useContenful = <T>({
	type,
	fire = true
}: Arguments): ReturnType<T> => {
	const [apiState, setApiState] = useState<API_STATE>('idle')
	const [content, setContent] = useState<EntryCollection<T> | undefined>(
		undefined
	)

	const [error, setError] = useState<string>()

	const call = useCallback(() => {
		setApiState('loading')
		client
			.getEntries<T>({ content_type: type })
			.then((results) => {
				setContent(results)
				setApiState('success')
			})
			.catch((e: string) => {
				setError(e)
				setApiState('error')
			})
	}, [type])

	useEffect(() => {
		if (fire) call()
	}, [fire, call])

	return { content, error, apiState }
}
