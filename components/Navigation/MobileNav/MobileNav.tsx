import { motion, useCycle } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { MenuToggle } from './Button'
import { Navigation } from './List'
import { backgroundVariant } from './variants'

import { useDimensions } from 'app/hooks/useDimensions'

export const MobileNav = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	return (
		<Nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
		>
			<Background variants={backgroundVariant} />
			<Navigation />
			<MenuToggle toggle={() => toggleOpen()} />
		</Nav>
	)
}

const Nav = styled(motion.nav)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100vw;

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
	background: #0075bf;
`
