import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<Base>
			<Background>
				<TigullioBox src={'../assets/map2.svg'} />
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
	left: -80px;
	right: 0;
	top: -200px;

	margin-top: ${({ theme }) => theme.spacing(-5)};
	overflow-x: hidden;
	overflow-y: hidden;
`

const TigullioBox = styled.img`
	width: 110%;
	height: 900px;
	transform: rotate(-10deg);
`

const Nav = styled.nav`
	position: absolute;
	right: ${({ theme }) => theme.spacing(2)};
	top: ${({ theme }) => theme.spacing(2)};
	z-index: 2;
`
