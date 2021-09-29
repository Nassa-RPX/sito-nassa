import Image from 'next/image'
import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import { STATES } from 'app/data/constants'
import { useContenful } from 'app/hooks/useContentful'
import { IIntroductionFields } from 'app/shared/contentful'
import { getImageInfo } from 'app/utils/getImageInfo'

import { BaseVariants } from 'components/Container'
import { Base } from 'components/Layout'
import { Loading } from 'components/Loading'

export const Hero = (): JSX.Element => {
	const { content, apiState, error } = useContenful<IIntroductionFields>({
		type: 'introduction'
	})

	/* ----------------------------- SUB COMPONENTS ----------------------------- */

	const SuccessView = () => {
		if (!content || !content.items[0]) return <ErrorView />

		const introductionData = content?.items[0]
		console.log('introduction', introductionData.fields.logoNassa.fields.file)

		const { url, width, height } = getImageInfo({
			file: introductionData.fields.logoNassa.fields.file
		})

		return (
			<HeroBase height={height} direction={'row'}>
				<Banner>
					<Image src={url} alt={'static'} width={width} height={height} />
				</Banner>
				<Data>
					<Info>
						<Title>{introductionData.fields.welcome}</Title>
						<Sub>{introductionData.fields.text[0]}</Sub>
						<Text>{introductionData.fields.text[1]}</Text>
					</Info>
				</Data>
			</HeroBase>
		)
	}

	const ErrorView = () => {
		return <span>Error, {error}</span>
	}

	/* ----------------------------- MAIN RETURN ----------------------------- */

	return (
		<>
			{apiState === STATES.LOADING && <Loading />}
			{apiState === STATES.ERROR && <ErrorView />}
			{apiState === STATES.SUCCESS && <SuccessView />}
		</>
	)
}

type HeroBaseProps = {
	height: number
}

const HeroBase = styled(Base)<HeroBaseProps>`
	${up('lg')} {
		height: ${(props) => props.height}px;
	}
`

const Banner = styled.div`
	flex: 1;
	position: relative;
	display: flex;
	justify-content: center;

	margin-bottom: ${({ theme }) => theme.spacing(2)};

	${up('lg')} {
		margin-bottom: none;
	}
`

const Data = styled.div`
	flex: 1;
	height: 100%;

	font-size: ${({ theme }) => theme.typo.size.heading3};
`

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const Title = styled.h1`
	font-family: ${({ theme }) => theme.typo.family.heading};
	color: ${({ theme }) => theme.palette.blueNassa};
	font-size: ${({ theme }) => theme.typo.size.heading1}; ;
`

const Sub = styled.h2`
	margin-top: ${({ theme }) => theme.spacing(1)};
	margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`

const Text = styled.span`
	color: ${({ theme }) => theme.palette.grayNassa};
`
