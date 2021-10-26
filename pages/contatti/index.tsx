import React from 'react'
import styled from 'styled-components'

import { useContentful } from 'app/hooks/useContentful'
import { IContactsFields } from 'app/shared/contentful'
import { getPosition } from 'app/utils/getPosition'

import { Base } from 'components/Layout'
import { Contact } from 'components/contacts/Contact'

const Contacts = (): JSX.Element => {
	const { content, state, error } = useContentful<IContactsFields>({
		type: 'contacts'
	})

	return (
		<Base direction={'column'}>
			<PageTitle>Contatti</PageTitle>
			<ContactMain>
				{content &&
					content.items
						.reverse()
						.map((contact, i) => (
							<Contact
								key={i}
								contact={contact.fields}
								p={getPosition(i)}
								order={i}
							/>
						))}
			</ContactMain>
		</Base>
	)
}

export default Contacts

const PageTitle = styled.h1`
	font-size: ${({ theme }) => theme.typo.size.heading1};
	color: ${({ theme }) => theme.palette.blueNassa};
	font-family: ${({ theme }) => theme.typo.family.heading};
`

const ContactMain = styled.section`
	width: 80%;
	margin: 0 auto;
	margin-top: ${({ theme }) => theme.spacing(6)};
`
