import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Children } from 'app/shared/types'
import theme from 'app/theme'
import fontsFaces from 'app/theme/fontsFaces'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
   ${fontsFaces.regular}
   ${fontsFaces.bold}
   ${fontsFaces.light}

   body {
	   display: flex;
	   flex-direction: column;
	   font-family: ${({ theme }) => theme.typo.family.main};
	   font-size: 18px;
   }

`

const Root = ({ children }: Children) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

export default Root
