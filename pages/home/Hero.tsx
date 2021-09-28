import React, { useEffect } from 'react'
import styled from 'styled-components'

import { client } from 'app/client'
import { IIntroductionFields } from 'app/shared/contentful'

export const Hero = (): JSX.Element => {
	useEffect(() => {
		client
			.getEntries<IIntroductionFields>({ content_type: 'introduction' })
			.then((results) => {
				console.log('results', results)
			})
			.catch(() => console.error('error'))
	}, [])

	return (
		<Base>
			<span>Hero</span>
		</Base>
	)
}

const Base = styled.div``
