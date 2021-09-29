import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export type ImageProps = {
	alt: string
	src: string
	remote: boolean
}

export const Image: React.FC<ImageProps> = ({ alt, src, remote = false }) => {
	const imageSrc = remote ? `http:${src}` : src

	return <LazyLoadImage alt={alt} src={imageSrc} effect={'blur'} />
}
