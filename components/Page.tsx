import React, { useEffect } from 'react'

import { Error } from './Error'
import { Loading } from './Loading'

import { Children } from 'app/shared/types'
import { useApiStore } from 'app/store/useApiStore'
import { isApi, isApiError, isApiSuccess } from 'app/utils/isApiState'

export const Page = ({ children }: Children): JSX.Element => {
	const { apiState, clearState } = useApiStore()

	useEffect(() => {
		clearState()
	}, [])

	return (
		<>
			{isApi(apiState, ['idle', 'loading']) && <Loading />}
			{isApiError(apiState) && <Error />}
			{isApiSuccess(apiState) && <>{children}</>}
		</>
	)
}
