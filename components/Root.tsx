import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Children } from 'app/shared/types'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  


`

const Root = ({ children }: Children) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	)
}

export default Root
