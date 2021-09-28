import React from 'react'
import styled from 'styled-components'

import { Children } from 'app/shared/types'

type ContainerProps = { margin: number } & Children

export const Container = ({
	margin,
	children
}: ContainerProps): JSX.Element => {
	console.log('container margin', margin)
	return <Base margin={margin}>{children}</Base>
}

type BaseVariants = {
	margin?: number
}

const Base = styled.div<BaseVariants>`
	margin-top: ${(props) => props.margin}px;
`
