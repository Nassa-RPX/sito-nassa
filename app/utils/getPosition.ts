import { Position } from 'app/shared/types'

export const getPosition = (positionNumber: number): Position =>
	positionNumber % 2 === 0 ? 'left' : 'right'
