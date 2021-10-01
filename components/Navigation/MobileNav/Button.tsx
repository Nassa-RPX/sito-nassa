import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

import { MenuToggle } from 'app/shared/types'

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#BDE5FF"
		strokeLinecap="round"
		{...props}
	/>
)

export const Button = ({ toggle }: MenuToggle) => (
	<MenuCTA onClick={toggle}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' }
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 }
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' }
				}}
			/>
		</svg>
	</MenuCTA>
)

const MenuCTA = styled.button`
	pointer-events: all;
	outline: none;
	border: none;
	cursor: pointer;
	position: absolute;
	top: 18px;
	right: 15px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.blueNassa}; ;
`
