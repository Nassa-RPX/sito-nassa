import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { MobileNav } from './MobileNav/MobileNav'

import { pages } from 'app/data/pages'

export const Navbar = React.forwardRef<HTMLDivElement>((props, ref) => {
	const router = useRouter()

	return (
		<Base>
			{/* <Background ref={ref}>
				<TigullioBox src={'../assets/tigullio.svg'} />
			</Background> */}

			<BackgroundVirgi ref={ref}>
				<TigullioVirgi src={'../assets/map2.svg'} />
			</BackgroundVirgi>
			<Nav>
				<MobileNav />

				<Pages>
					{pages.map((page, i) => (
						<Link key={i} href={page.url} passHref>
							<span className={router.pathname === page.url ? 'active' : ''}>
								{page.name}
							</span>
						</Link>
					))}
				</Pages>
			</Nav>
		</Base>
	)
})

Navbar.displayName = 'NavBar'

const Base = styled.div`
	position: relative;
	width: 100vw;
	color: white;
`

// const Background = styled.div`
// 	position: absolute;
// 	left: -380px;
// 	top: -10vh;
// 	right: 0;

// 	overflow-x: hidden;
// 	overflow-y: hidden;

// 	${up('md')} {
// 		top: -60px;
// 		left: -40px;
// 	}

// 	${up('lg')} {
// 		top: -20vh;
// 	}
// `

// const TigullioBox = styled.img`
// 	width: 120%;

// 	${up('md')} {
// 		width: 110%;
// 		transform: rotate(-2deg);
// 	}
// `

const BackgroundVirgi = styled.div`
	pointer-events: none;
	position: absolute;
	left: 0;
	right: 0;
	overflow: hidden;
	${up('lg')} {
		top: -200px;
	}
`

const TigullioVirgi = styled.img`
	width: 110%;
	pointer-events: none;

	${up('lg')} {
		height: 800px;
		transform: rotate(-4deg);
	}
`

const Nav = styled.section`
	position: absolute;
	right: ${({ theme }) => theme.spacing(2)};
	top: ${({ theme }) => theme.spacing(2)};
`

const Pages = styled.div`
	display: none;

	${up('xl')} {
		display: flex;
	}

	& span {
		cursor: pointer;
		text-transform: uppercase;
		color: ${({ theme }) => theme.palette.lightBlueNassa};
		font-family: ${({ theme }) => theme.typo.family.heading};
		/* font-size: ${({ theme }) => theme.typo.size.heading3}; */
		margin-left: ${({ theme }) => theme.spacing(2)};
	}

	& .active {
		color: ${({ theme }) => theme.palette.yellowNassa};
	}
`
