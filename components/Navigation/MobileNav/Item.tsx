import { motion } from 'framer-motion'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

import { itemVariant } from './variants'

import { Page } from 'app/data/pages'
import { MenuToggle } from 'app/shared/types'

type ItemProps = MenuToggle & { page: Page }

export const MenuItem = ({ toggle, page }: ItemProps) => {
	return (
		<PageItem
			variants={itemVariant}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={toggle}
		>
			<Link href={page.url}>{page.name}</Link>
		</PageItem>
	)
}

const PageItem = styled(motion.li)`
	list-style: none;
	margin-bottom: ${({ theme }) => theme.spacing(4)};
	display: flex;
	align-items: center;
	cursor: pointer;

	font-family: ${({ theme }) => theme.typo.family.heading};
	font-size: ${({ theme }) => theme.typo.size.heading1};

	color: ${({ theme }) => theme.palette.lightBlueNassa};
`
