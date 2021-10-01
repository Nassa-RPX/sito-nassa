import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { STATES } from 'app/data/constants'
import { useContenful } from 'app/hooks/useContentful'
import { IIntroductionFields } from 'app/shared/contentful'
import { getImageInfo } from 'app/utils/getImageInfo'

import { Image } from 'components/Image'
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
		const imageFile = introductionData.fields.logoNassa.fields.file

		const { height } = getImageInfo({
			file: imageFile
		})

		return (
			<HeroBase height={height} direction={'row'}>
				<Banner>
					<Image file={imageFile} alt={'Benvenuti in Nassa'} />
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
	/* ${up('lg')} {
		height: ${(props) => props.height}px;
	} */
`

const Banner = styled.div`
	z-index: -2;
	flex: 1;
	position: relative;
	display: flex;
	justify-content: center;

	transform: translateX(-5%);

	margin-bottom: ${({ theme }) => theme.spacing(2)};

	${up('lg')} {
		margin-bottom: none;
		transform: none;
	}
`

const Data = styled.div`
	flex: 1;
	height: 100%;
	font-size: ${({ theme }) => theme.typo.size.heading3};

	${up('lg')} {
		margin-left: ${({ theme }) => theme.spacing(4)};
	}
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
	font-weight: bold;
	margin-top: ${({ theme }) => theme.spacing(1)};
	margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`

const Text = styled.span`
	color: ${({ theme }) => theme.palette.grayNassa};
`
