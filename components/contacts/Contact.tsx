import { motion } from 'framer-motion'
import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Info } from './Info'

import { IContactsFields } from 'app/shared/contentful'
import { Position } from 'app/shared/types'

import { Base } from 'components/Layout'

type Props = {
	contact: IContactsFields
	p: Position
	order: number
}

export const Contact = ({ contact, p, order }: Props): JSX.Element => {
	return (
		<Box
			position={p}
			initial={{ translateX: p === 'left' ? 200 : -200, opacity: 0 }}
			animate={{ translateX: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: order * 0.5 }}
		>
			<ContactBase direction={'column'} margin={{ bottom: 2 }}>
				<Name position={p}>{contact.name}</Name>
				<Line
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 0.5, delay: order + 0.5 * 0.2 }}
				/>

				<ContactInfo position={p}>
					<Info position={p} type={'mail'} content={contact.mail} />
					<Info position={p} type={'instagram'} content={contact.instagram} />
					<Info position={p} type={'facebook'} content={contact.facebook} />
					<Info position={p} type={'phone'} content={contact.phone} />
				</ContactInfo>
			</ContactBase>
		</Box>
	)
}

const Box = styled(motion.div)<{ position: Position }>`
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
