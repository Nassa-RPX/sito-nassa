import { AnimatePresence, motion } from 'framer-motion'
import { ST } from 'next/dist/next-server/lib/utils'
import { wrap } from 'popmotion'
import React, { useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { SlideContainer } from './SlideContainer'

import { STATES } from 'app/data/constants'
import { useContenful } from 'app/hooks/useContentful'
import { INassaFields } from 'app/shared/contentful'
import { ContentfulImage } from 'app/shared/types'

import { Image } from 'components/Image'
import { Loading } from 'components/Loading'

export const NassaSlide = (): JSX.Element => {
	const { content, apiState, error } = useContenful<INassaFields>({
		type: 'nassa'
	})

	const [images, setImages] = useState<Array<string>>([])
	const [ready, setReady] = useState<boolean>(false)

	useEffect(() => {
		if (apiState !== STATES.SUCCESS || !content) return

		const contentImages: Array<string> = content.items.map((item) => {
			return 'https:' + item.fields.logo.fields.file.url
		})

		setImages(contentImages)
		setReady(true)
	}, [content, apiState])

	/* ----------------------------- SUB COMPONENTS ----------------------------- */

	/* ----------------------------- MAIN RETURN ----------------------------- */

	return (
		<Base>
			{apiState === STATES.LOADING && <Loading />}
			{ready && <SlideContainer images={images} />}
		</Base>
	)
}

const Base = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.palette.blueNassa};

	justify-content: center;
	padding: ${({ theme }) => theme.spacing(2, 1)};
	margin: ${({ theme }) => theme.spacing(2, 0)};

	& img {
		max-width: 100%;

		${up('sm')} {
			max-width: none;
			height: 300px;
		}
	}
`
