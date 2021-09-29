import { defaults } from 'app/data/info'

export type Arguments = {
	file: {
		url: string
		details: {
			image?: {
				width: number
				height: number
			}
		}
	}
}

export type ReturnType = {
	url: string
	width: number
	height: number
}

export const getImageInfo = ({ file }: Arguments): ReturnType => {
	const url = `https:${file.url}`

	const width = file.details.image?.width || defaults.width
	const height = file.details.image?.height || defaults.height

	return { url, width, height }
}
