import { STATES } from 'app/data/constants'
import { API_STATE } from 'app/hooks/useContentful'

export const isApiIdle = (state: API_STATE): boolean => {
	return state === STATES.IDLE
}

export const isApiLoading = (state: API_STATE): boolean => {
	return state === STATES.LOADING
}

export const isApiError = (state: API_STATE): boolean => {
	return state === STATES.ERROR
}

export const isApiSuccess = (state: API_STATE): boolean => {
	return state === STATES.SUCCESS
}
