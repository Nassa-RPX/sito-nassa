// import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'
import { Facebook } from '@styled-icons/feather/Facebook'
import { Instagram } from '@styled-icons/feather/Instagram'
import { Mail } from '@styled-icons/feather/Mail'
import { Phone } from '@styled-icons/feather/Phone'
import styled from 'styled-components'

const ControlNext = styled(ArrowBack)`
	transform: rotate(180deg);
`

type IconsProps = {
	ControlPrev: typeof ArrowBack
	ControlNext: typeof ControlNext
	Mail: typeof Mail
	Facebook: typeof Facebook
	Instagram: typeof Instagram
	Phone: typeof Phone
}

export const Icons: IconsProps = {
	ControlPrev: ArrowBack,
	ControlNext,
	Mail,
	Facebook,
	Phone,
	Instagram
}
