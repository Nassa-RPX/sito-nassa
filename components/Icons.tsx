import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'
import styled from 'styled-components'

const ControlNext = styled(ArrowBack)`
	transform: rotate(180deg);
`

type IconsProps = {
	ControlPrev: typeof ArrowBack
	ControlNext: typeof ControlNext
}

export const Icons: IconsProps = {
	ControlPrev: ArrowBack,
	ControlNext
}
