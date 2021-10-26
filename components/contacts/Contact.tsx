import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Info } from './Info'

import { useMobile } from 'app/hooks/useMobile'
import { IContactsFields } from 'app/shared/contentful'
import { Position } from 'app/shared/types'
import { getPosition } from 'app/utils/getPosition'

import { Base } from 'components/Layout'

type Props = {
	contact: IContactsFields
	order: number
}

export const Contact = ({ contact, order }: Props): JSX.Element => {
	const [position, setPosition] = useState<Position>('left')
	const { isMobile } = useMobile()

	useEffect(() => {
		setPosition(getPosition(order))
	}, [])

	return (
		<Box
			position={position}
			initial={{
				opacity: 0,
				x: isMobile() || position === 'right' ? -200 : 200
			}}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: order * 0.5 }}
		>
			<ContactBase direction={'column'} margin={{ bottom: 2 }}>
				<Name position={position}>{contact.name}</Name>
				<Line
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 0.5, delay: order + 0.5 * 0.2 }}
				/>

				<ContactInfo position={position}>
					<Info position={position} type={'mail'} content={contact.mail} />
					<Info
						position={position}
						type={'instagram'}
						content={contact.instagram}
					/>
					<Info
						position={position}
						type={'facebook'}
						content={contact.facebook}
					/>
					<Info position={position} type={'phone'} content={contact.phone} />
				</ContactInfo>
			</ContactBase>
		</Box>
	)
}

const Box = styled(motion.div)<{ position: Position }>`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: ${(props) =>
		props.position === 'left' ? 'flex-start' : 'flex-end'};
`

const ContactBase = styled(Base)`
	${up('xl')} {
		width: 30% !important;
	}
`

const Name = styled.h3<{ position: Position }>`
	font-family: ${({ theme }) => theme.typo.family.heading};
	font-size: ${({ theme }) => theme.typo.size.heading1};
	color: ${({ theme }) => theme.palette.blueNassa};
	width: 100%;
	text-align: ${(props) => props.position};
`

const Line = styled(motion.span)`
	width: 100%;
	height: 4px;
	background-color: ${({ theme }) => theme.palette.blueNassa};
	margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const ContactInfo = styled.ul<{ position: Position }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: ${(props) =>
		props.position === 'left' ? 'flex-start' : 'flex-end'};
`
