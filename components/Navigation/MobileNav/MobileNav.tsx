import { motion, useCycle } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useScrollTo } from 'react-use-window-scroll'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Button } from './Button'
import { Navigation } from './List'
import { backgroundVariant } from './variants'

import { MOBILE_NAV_ELEVATION } from 'app/data/constants'
import { useDimensions } from 'app/hooks/useDimensions'
import { useLockScroll } from 'app/hooks/useLockScroll'

export const MobileNav = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	useLockScroll({ lock: isOpen })

	const toggleAnimation = () => {
		toggleOpen()
		scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
			raise={MOBILE_NAV_ELEVATION}
		>
			<Background variants={backgroundVariant} />
			<Navigation isOpen={isOpen} toggle={() => toggleAnimation()} />
			<Button toggle={() => toggleAnimation()} />
		</Nav>
	)
}

const Nav = styled(motion.nav)<{ raise: number }>`
	pointer-events: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	z-index: ${(props) => props.raise};

	${up('xl')} {
		display: none;
	}
`

const Background = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	background: #0075bf;
`
