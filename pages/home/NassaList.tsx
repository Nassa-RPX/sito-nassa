import Link from 'next/link'
import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { NassaSlide } from './NassaSlide/NassaSlide'

import { HomeData } from 'app/data/pages'

import { Base } from 'components/Layout'

export const NassaList = (): JSX.Element => {
	return (
		<Base direction={'column'}>
			<ListHeader>
				<ListTitle>{HomeData.nassaList.title}</ListTitle>

				<ListAction>
					<ActionDescription>
						{HomeData.nassaList.action.description}
					</ActionDescription>

					<Link href="/" passHref>
						<ActionButton>{HomeData.nassaList.action.cta}</ActionButton>
					</Link>
				</ListAction>
			</ListHeader>

			<NassaSlide />
		</Base>
	)
}

const ListHeader = styled.header`
	width: 100%;
	margin-top: ${({ theme }) => theme.spacing(4)};

	display: flex;
	flex-direction: column;

	${up('md')} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`

const ListTitle = styled.h1`
	font-size: ${({ theme }) => theme.typo.size.heading1};
	font-family: ${({ theme }) => theme.typo.family.heading};
	color: ${({ theme }) => theme.palette.yellowNassa};
`

const ListAction = styled.div`
	margin: ${({ theme }) => theme.spacing(0.5, 0)};
	display: flex;
	justify-content: space-between;
	align-items: center;

	${up('md')} {
		margin: none;
	}
`

const ActionDescription = styled.span`
	margin-right: ${({ theme }) => theme.spacing(2)};
	color: ${({ theme }) => theme.palette.grayNassa};
`

const ActionButton = styled.a`
	padding: ${({ theme }) => theme.spacing(0.75, 2)};
	border: 2px solid ${({ theme }) => theme.palette.yellowNassa};
	color: ${({ theme }) => theme.palette.yellowNassa};
`
