import React, { useEffect, useRef, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Container } from './Container'
import { Navbar } from './Navigation/Navbar'

import { useMobile } from 'app/hooks/useMobile'
import { Children } from 'app/shared/types'
import theme from 'app/theme'
import fontsFaces from 'app/theme/fontsFaces'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
   ${fontsFaces.regular}
   ${fontsFaces.bold}
   ${fontsFaces.light}

   body {
	   width: 100vw;
	   height: 100vh;
	   display: flex;
	   flex-direction: column;
	   font-family: ${({ theme }) => theme.typo.family.main};
	   font-size: 18px;
	   overflow-x: hidden;
   }

`

export const Root = ({ children }: Children) => {
	const ref = useRef<HTMLDivElement>(null)
	const { isMobile } = useMobile()
	const [navHeight, setNavHeight] = useState<number>(0)

	useEffect(() => {
		const getHeight = () => {
			const { current } = ref
			if (!current || !current.clientHeight) return
			const shift = isMobile() ? 0.3 : 0.5
			setNavHeight(current.clientHeight - current.clientHeight * shift)
		}

		getHeight()
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<>
				<Navbar ref={ref} />
				<Container margin={navHeight}>{children}</Container>
			</>
		</ThemeProvider>
	)
}
