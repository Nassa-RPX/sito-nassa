import { defaults } from 'app/data/info'
import { ContentfulImage } from 'app/shared/types'

export type Arguments = {
	file: ContentfulImage
	mobile?: boolean
}

export type ReturnType = {
	url: string
	width: number
	height: number
}

export const getImageInfo = ({
	file,
	mobile = false
}: Arguments): ReturnType => {
	const url = `https:${file.url}`

	let width = file.details.image?.width || defaults.width
	let height = file.details.image?.height || defaults.height

	if (mobile) {
		width = width * defaults.mobileShift
		height = height * defaults.mobileShift
	}

	return { url, width, height }
}
