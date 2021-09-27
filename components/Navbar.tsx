import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<Base>
			<Background>
				{/* <TigullioBox src={'../assets/map2.svg'} /> */}
				<TigullioBox src={'../assets/tigullio.svg'} />
				{/* <Tigullio /> */}
			</Background>
			<Nav>Navbar</Nav>
		</Base>
	)
}

export default Navbar

const Base = styled.div`
	position: relative;
	width: 100vw;
	color: white;
`

const Background = styled.div`
	position: absolute;
	left: -380px;
	top: -10vh;
	right: 0;

	overflow-x: hidden;
	overflow-y: hidden;

	${up('md')} {
		top: -60px;
		left: -40px;
	}

	${up('lg')} {
		top: -120px;
	}
`

const TigullioBox = styled.img`
	width: 120%;

	${up('md')} {
		width: 110%;
		transform: rotate(-5deg);
	}
`

const Nav = styled.nav`
	position: absolute;
	right: ${({ theme }) => theme.spacing(2)};
	top: ${({ theme }) => theme.spacing(2)};
	z-index: 2;
`
