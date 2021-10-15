import React, { useCallback, useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { SliderContainer } from './SliderContainer'

import { INassaFields } from 'app/shared/contentful'
import { ContentfulImage, NassaCollection } from 'app/shared/types'

export type ContentData = Array<Omit<INassaFields, 'logo'>>

type Props = {
	nassaInfo?: NassaCollection
}

export const NassaSlide = ({ nassaInfo }: Props): JSX.Element => {
	const [images, setImages] = useState<Array<ContentfulImage>>([])
	const [data, setData] = useState<ContentData>([])
	const [ready, setReady] = useState<boolean>(false)

	const mapImages = useCallback(() => {
		if (!nassaInfo) return
		const contentImages: Array<ContentfulImage> = nassaInfo.items.map(
			(item) => {
				return item.fields.logo.fields.file
			}
		)

		setImages(contentImages)
	}, [nassaInfo])

	const mapData = useCallback(() => {
		if (!nassaInfo) return

		const contentData: ContentData = nassaInfo.items.map((item) => {
			return {
				id: item.fields.id,
				name: item.fields.name
			}
		})

		setData(contentData)
	}, [nassaInfo])

	useEffect(() => {
		if (!nassaInfo) return

		mapImages()
		mapData()

		setReady(true)
	}, [nassaInfo, mapImages, mapData])

	/* ----------------------------- SUB COMPONENTS ----------------------------- */

	/* ----------------------------- MAIN RETURN ----------------------------- */

	return <Base>{ready && <SliderContainer images={images} data={data} />}</Base>
}

const Base = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.palette.blueNassa};
	overflow-x: hidden;
	border-radius: ${({ theme }) => theme.spacing(1)};

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
