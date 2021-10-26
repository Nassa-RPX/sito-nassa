import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const VerticalMain = styled.main`
	display: flex;
	flex-direction: column;
`

type Margin = {
	bottom?: number
	top?: number
	left?: number
	right?: number
}

type BaseProps = {
	direction: 'column' | 'row'
	centerY?: boolean
	centerX?: boolean
	margin?: Margin
}

export const Base = styled.div<BaseProps>`
	width: 100%;
	display: flex;
	flex-direction: ${(props) => props.direction};

	align-items: ${(props) =>
		(props.centerX && props.direction === 'column') ||
		(props.centerY && props.direction === 'row')
			? 'center'
			: 'flex-start'};

	justify-content: ${(props) =>
		(props.centerY && props.direction === 'column') ||
		(props.centerX && props.direction === 'row')
			? 'center'
			: 'flex-start'};

	margin-top: ${(props) =>
		props.margin && props.margin.top
			? props.theme.spacing(props.margin.top)
			: 'none'};

	margin-bottom: ${(props) =>
		props.margin && props.margin.bottom
			? props.theme.spacing(props.margin.bottom)
			: 'none'};

	margin-right: ${(props) =>
		props.margin && props.margin.right
			? props.theme.spacing(props.margin.right)
			: 'none'};

	margin-left: ${(props) =>
		props.margin && props.margin.left
			? props.theme.spacing(props.margin.left)
			: 'none'};

	${down('lg')} {
		flex-direction: column;
	}
`
