import React, { useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Children } from 'app/shared/types'

type ContainerProps = { margin: number } & Children

export const Container = ({
	margin,
	children
}: ContainerProps): JSX.Element => {
	const [windowHeight, setWindowHeight] = useState<number>(0)

	useEffect(() => {
		setWindowHeight(window.innerHeight)
	}, [])

	return (
		<Base margin={margin} baseHeight={windowHeight}>
			{children}
		</Base>
	)
}

export type BaseVariants = {
	margin: number
	baseHeight: number
}

const Base = styled.div<BaseVariants>`
	min-height: ${(props) => props.baseHeight - props.margin}px;
	width: 90%;
	margin: 0 auto;
	margin-top: ${(props) => props.margin}px;

	${up('lg')} {
		width: 70%;
		margin-top: ${(props) => props.margin}px;
	}
`
