import styled from 'styled-components'

export const VerticalMain = styled.main`
	display: flex;
	flex-direction: column;
`

type BaseProps = {
	direction: 'column' | 'row'
	centerY?: boolean
	centerX?: boolean
}
export const Base = styled.div<BaseProps>`
	display: flex;
	flex-direction: ${(props) => props.direction};

	align-items: ${(props) =>
		(props.centerX && props.direction === 'column') ||
		(props.centerY && props.direction === 'row')
			? 'center'
			: 'inherit'};

	justify-content: ${(props) =>
		(props.centerY && props.direction === 'column') ||
		(props.centerX && props.direction === 'row')
			? 'center'
			: 'inherit'};
`
