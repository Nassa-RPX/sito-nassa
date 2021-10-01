import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Icons } from 'components/Icons'

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
			>
				<Icons.ControlPrev size={32} />
			</Control>

			<Control
				type={'next'}
				onClick={() => {
					move('next')
					setIsMoved(isMoved + 1)
				}}
			>
				<Icons.ControlNext size={32} />
			</Control>
		</>
	)
}

const Control = styled.span<{ type: 'prev' | 'next' }>`
	display: flex;
	position: absolute;

	justify-content: center;
	align-items: center;

	border-radius: 100%;

	cursor: pointer;
	color: ${({ theme }) => theme.palette.whiteNassa};

	left: ${(props) =>
		props.type === 'prev' ? props.theme.spacing(1) : 'inherit'};
	right: ${(props) =>
		props.type === 'next' ? props.theme.spacing(1) : 'inherit'};

	top: 50%;
	transform: translateY(-50%);
`
