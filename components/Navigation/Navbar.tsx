import Link from 'next/link'
import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { MobileNav } from './MobileNav/MobileNav'

import { pages } from 'app/data/pages'

export const Navbar = () => {
	return (
		<Base>
			<Background>
				{/* <TigullioBox src={'../assets/map2.svg'} /> */}
				<TigullioBox src={'../assets/tigullio.svg'} />
			</Background>
			<Nav>
				<MobileNav />

				<Pages>
					{pages.map((page, i) => (
						<Link key={i} href={page.url}>
							{page.name}
						</Link>
					))}
				</Pages>
			</Nav>
		</Base>
	)
}

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
		top: -20vh;
	}
`

const TigullioBox = styled.img`
	width: 120%;

	${up('md')} {
		width: 110%;
		transform: rotate(-5deg);
	}
`

const Nav = styled.section`
	position: absolute;
	right: ${({ theme }) => theme.spacing(2)};
	top: ${({ theme }) => theme.spacing(2)};
	z-index: 2;
`

const Pages = styled.div`
	display: none;

	${up('xl')} {
		display: flex;
	}

	& a {
		text-transform: uppercase;
		color: ${({ theme }) => theme.palette.lightBlueNassa};
		font-family: ${({ theme }) => theme.typo.family.heading};
		/* font-size: ${({ theme }) => theme.typo.size.heading3}; */
		margin-left: ${({ theme }) => theme.spacing(2)};
	}
`
