import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
	move: (direction: 'prev' | 'next') => void
	checkStart: () => boolean
	checkEnd: () => boolean
}

export const Controls = ({
	move,
	checkStart,
	checkEnd
}: Props): JSX.Element => {
	const [position, setPosition] = useState<{ start: boolean; end: boolean }>({
		start: true,
		end: false
	})

	const [isMoved, setIsMoved] = useState(0)

	useEffect(() => {
		console.log('here')
		setPosition({ start: checkStart(), end: checkEnd() })
	}, [isMoved, checkStart, checkEnd])

	return (
		<>
			<Control
				type={'prev'}
				onClick={() => {
					move('prev')
					setIsMoved(isMoved + 1)
				}}
				disabled={position.start}
			>
				-
			</Control>

			<Control
				type={'next'}
				onClick={() => {
					move('next')
					setIsMoved(isMoved + 1)
				}}
				disabled={position.end}
			>
				+
			</Control>
		</>
	)
}

const Control = styled.span<{ type: 'prev' | 'next'; disabled: boolean }>`
	display: ${(props) => (props.disabled ? 'none' : 'flex')};
	position: absolute;

	height: 25px;
	width: 25px;

	justify-content: center;
	align-items: center;

	background: white;
	border-radius: 100%;

	cursor: pointer;

	left: ${(props) => (props.type === 'prev' ? '0' : 'inherit')};
	right: ${(props) => (props.type === 'next' ? '0' : 'inherit')};

	top: 50%;
	transform: translateY(-50%);
`
