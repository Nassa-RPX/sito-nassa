import React, { useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { ContentData } from './NassaSlide'
import { Slider } from './Slider'

import { ContentfulImage } from 'app/shared/types'

import { Image } from 'components/Image'

type Props = {
	images: Array<ContentfulImage>
	data: ContentData
}

export const SliderContainer = ({ images, data }: Props): JSX.Element => {
	return (
		<Slider>
			{data.map((el, idx) => {
				return (
					<El key={el.id}>
						<Image file={images[idx]} alt={el.id} />
					</El>
				)
			})}
		</Slider>
	)
}

const El = styled.div`
	margin: ${({ theme }) => theme.spacing(0, 1)};
	height: 100%;
	flex: 1 0 90%;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding-right: ${({ theme }) => theme.spacing(2)};
	border-right: 2px solid #4d9cd7;

	${up('md')} {
		flex: 1 0 30%;
	}

	& img {
		object-fit: contain;
		cursor: grab;
		pointer-events: none;
	}

	& span {
		margin-top: ${({ theme }) => theme.spacing(-2)};
	}
`
