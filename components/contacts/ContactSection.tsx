import { Entry } from 'contentful'
import React, { useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Contact } from './Contact'

import { IContactsFields } from 'app/shared/contentful'
import { ContactsCollection } from 'app/shared/types'

type Props = {
	contacts?: ContactsCollection
}

export const ContactSection = ({ contacts }: Props): JSX.Element => {
	const [reversedContact, setReversedContact] = useState<
		Entry<IContactsFields>[]
	>()

	useEffect(() => {
		if (!contacts) return
		const reversed = contacts.items.reverse()
		setReversedContact(reversed)
	}, [contacts])

	return (
		<Base>
			{reversedContact &&
				reversedContact.map((contact, i) => (
					<Contact key={i} contact={contact.fields} order={i} />
				))}
		</Base>
	)
}

const Base = styled.section`
	margin-top: ${({ theme }) => theme.spacing(-1)};
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	${up('lg')} {
		width: 80%;
		margin: 0 auto;
	}
`
