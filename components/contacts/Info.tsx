import { motion } from 'framer-motion'
import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { IContactsFields } from 'app/shared/contentful'
import { Position } from 'app/shared/types'

import { Icons } from 'components/Icons'

const CONTACT_ICONS_SIZE = 24

const iconsProps = { size: CONTACT_ICONS_SIZE, color: '#0075BF' }

type Props = {
	position: Position
	type: keyof Omit<IContactsFields, 'name'>
	content?: string
}

const MailType = ({ content }: { content: string }) => {
	return (
		<>
			<motion.span whileHover={{ scale: 1.25 }}>
				<Icons.Mail {...iconsProps} />
			</motion.span>
			{content}
		</>
	)
}

const InstagramType = ({ content }: { content: string }) => {
	return (
		<>
			<motion.span whileHover={{ scale: 1.25 }}>
				<Icons.Instagram {...iconsProps} />
			</motion.span>
			{content}
		</>
	)
}

const FacebookType = ({ content }: { content: string }) => {
	return (
		<>
			<motion.span whileHover={{ scale: 1.25 }}>
				<Icons.Facebook {...iconsProps} />
			</motion.span>
			{content}
		</>
	)
}

const PhoneType = ({ content }: { content: string }) => {
	return (
		<>
			<motion.span whileHover={{ scale: 1.25 }}>
				<Icons.Phone {...iconsProps} />
			</motion.span>
			{content}
		</>
	)
}

export const Info = ({ position, type, content }: Props): JSX.Element => {
	return (
		<Base position={position}>
			{type === 'mail' && content && <MailType content={content} />}
			{type === 'instagram' && content && <InstagramType content={content} />}
			{type === 'facebook' && content && <FacebookType content={content} />}
			{type === 'phone' && content && <PhoneType content={content} />}
		</Base>
	)
}

const Base = styled.li<{ position: Position }>`
	display: flex;
	align-items: center;
	margin-bottom: ${({ theme }) => theme.spacing(0.3)};

	& span {
		cursor: pointer;
		order: ${(props) => (props.position === 'left' ? '0' : '2')};
		margin-right: ${(props) =>
			props.position === 'left' ? props.theme.spacing(0.5) : '0'};
		margin-left: ${(props) =>
			props.position === 'right' ? props.theme.spacing(0.5) : '0'};
	}
`
