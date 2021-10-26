import React from 'react'
import styled from 'styled-components'

import { STATES } from 'app/data/constants'
import { useContentful } from 'app/hooks/useContentful'
import { IContactsFields } from 'app/shared/contentful'
import { getPosition } from 'app/utils/getPosition'

import { Error } from 'components/Error'
import { Loading } from 'components/Loading'
import { Contact } from 'components/contacts/Contact'
import { ContactContainer } from 'components/contacts/ContactContainer'
import { ContactSection } from 'components/contacts/ContactSection'

const Contacts = (): JSX.Element => {
	const { content, state, error } = useContentful<IContactsFields>({
		type: 'contacts'
	})

	const Success = () => {
		return (
			<Base>
				<PageTitle>Contatti</PageTitle>
				<ContactSection contacts={content} />
			</Base>
		)
	}

	return (
		<ContactContainer>
			{state === STATES.LOADING && <Loading />}
			{state === STATES.ERROR && <Error />}
			{state === STATES.SUCCESS && <Success />}
		</ContactContainer>
	)
}

export default Contacts

const Base = styled.main`
	display: flex;
	flex-direction: column;
`

const PageTitle = styled.h1`
	font-size: ${({ theme }) => theme.typo.size.heading1};
	color: ${({ theme }) => theme.palette.blueNassa};
	font-family: ${({ theme }) => theme.typo.family.heading};
	margin-bottom: ${({ theme }) => theme.spacing(6)};
`

const ContactMain = styled.section`
	width: 80%;
	margin: 0 auto;
`
