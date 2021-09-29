import NextImage from 'next/image'
import React from 'react'

import { useMobile } from 'app/hooks/useMobile'
import { ContentfulImage } from 'app/shared/types'
import { getImageInfo } from 'app/utils/getImageInfo'

export type ImageProps = {
	file: ContentfulImage
	alt: string
}

export const Image: React.FC<ImageProps> = ({ file, alt }) => {
	const { isMobile } = useMobile()

	const { url, width, height } = getImageInfo({ file, mobile: isMobile() })

	return <NextImage src={url} alt={alt} width={width} height={height} />
}
