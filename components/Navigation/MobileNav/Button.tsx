import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#BDE5FF"
		strokeLinecap="round"
		{...props}
	/>
)

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
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
	outline: none;
	border: none;
	cursor: pointer;
	position: absolute;
	top: 18px;
	right: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;
`
