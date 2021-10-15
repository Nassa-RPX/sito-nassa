import { API_STATE } from 'app/hooks/useContentful'

export const isApi = (
	state: API_STATE,
	possibleStates: Array<API_STATE>
): boolean => {
	return possibleStates.includes(state)
}

export const isApiIdle = (state: API_STATE): boolean => {
	return isApi(state, ['idle'])
}

export const isApiLoading = (state: API_STATE): boolean => {
	return isApi(state, ['loading'])
}

export const isApiError = (state: API_STATE): boolean => {
	return isApi(state, ['error'])
}

export const isApiSuccess = (state: API_STATE): boolean => {
	return isApi(state, ['success'])
}
