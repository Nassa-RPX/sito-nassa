import { createClient } from 'contentful'

export const client = createClient({
	space: process.env.SPACE || 'e3jmxb577d5m',
	accessToken:
		process.env.API_TOKEN || 'R3QTk8c5t76Ta_X1JTmiG4pLo92d6Nb5lVCpVP4iSo8'
})
