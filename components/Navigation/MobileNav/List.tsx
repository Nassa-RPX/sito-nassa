import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { MenuItem } from './Item'
import { listVariant } from './variants'

import { pages } from 'app/data/pages'
import { MenuToggle } from 'app/shared/types'

type Props = {
	isOpen: boolean
} & MenuToggle

export const Navigation = ({ isOpen, toggle }: Props) => (
	<PagesList isOpen={isOpen} variants={listVariant}>
		{pages.map((page, idx) => (
			<MenuItem page={page} key={idx} toggle={toggle} />
		))}
	</PagesList>
)

const PagesList = styled(motion.ul)<{ isOpen: boolean }>`
	pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
	padding: 25px;
	position: absolute;
	top: 50%;
	right: 50%;
	transform: translate(50%, -50%);
`
