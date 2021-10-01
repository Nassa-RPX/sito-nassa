import { AnimatePresence, motion } from 'framer-motion'
import { ST } from 'next/dist/next-server/lib/utils'
import { wrap } from 'popmotion'
import React, { useCallback, useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { SliderContainer } from './SliderContainer'

import { STATES } from 'app/data/constants'
import { useContentful } from 'app/hooks/useContentful'
import { INassaFields } from 'app/shared/contentful'
import { ContentfulImage } from 'app/shared/types'

import { Image } from 'components/Image'
import { Loading } from 'components/Loading'

export type ContentData = Array<Omit<INassaFields, 'logo'>>

export const NassaSlide = (): JSX.Element => {
	const { content, apiState, error } = useContentful<INassaFields>({
		type: 'nassa'
	})

	const [images, setImages] = useState<Array<ContentfulImage>>([])
	const [data, setData] = useState<ContentData>([])
	const [ready, setReady] = useState<boolean>(false)

	const mapImages = useCallback(() => {
		if (!content) return
		const contentImages: Array<ContentfulImage> = content.items.map((item) => {
			return item.fields.logo.fields.file
		})

		setImages(contentImages)
	}, [content])

	const mapData = useCallback(() => {
		if (!content) return

		const contentData: ContentData = content.items.map((item) => {
			return {
				id: item.fields.id,
				name: item.fields.name
			}
		})

		setData(contentData)
	}, [content])

	useEffect(() => {
		if (apiState !== STATES.SUCCESS || !content) return

		mapImages()
		mapData()

		setReady(true)
	}, [content, apiState, mapImages, mapData])

	/* ----------------------------- SUB COMPONENTS ----------------------------- */

	/* ----------------------------- MAIN RETURN ----------------------------- */

	return (
		<Base>
			{apiState === STATES.LOADING && <Loading />}
			{ready && <SliderContainer images={images} data={data} />}
		</Base>
	)
}

const Base = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.palette.blueNassa};
	overflow-x: hidden;

	justify-content: center;
	margin: ${({ theme }) => theme.spacing(2, 0)};

	padding: ${({ theme }) => theme.spacing(1)};

	& img {
		max-width: 100%;

		${up('sm')} {
			max-width: none;
			height: 300px;
		}
	}
`
