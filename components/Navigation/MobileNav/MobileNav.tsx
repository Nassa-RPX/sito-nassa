import { motion, useCycle } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useScrollTo } from 'react-use-window-scroll'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Button } from './Button'
import { Navigation } from './List'
import { backgroundVariant } from './variants'

import { useDimensions } from 'app/hooks/useDimensions'
import { useLockScroll } from 'app/hooks/useLockScroll'

export const MobileNav = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)
	const scrollTo = useScrollTo()

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
		>
			<Background variants={backgroundVariant} />
			<Navigation isOpen={isOpen} toggle={() => toggleAnimation()} />
			<Button toggle={() => toggleAnimation()} />
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
	height: 100vh;
	overflow: hidden;

	background: #0075bf;
`
