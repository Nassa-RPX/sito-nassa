import { motion, useMotionValue } from 'framer-motion'
import React, { useRef } from 'react'
import styled from 'styled-components'

import { useGetSliderConstraints } from 'app/hooks/useGetSliderConstraints'
import { Children } from 'app/shared/types'

// ! Fix slider reset on final slide

export const MotionBox = styled(motion.div)``

const SliderBox = styled(MotionBox)`
	cursor: grab;
	width: 100%;
	height: 100%;
	background: transparent;

	display: flex;
	justify-content: space-between;
`

type Props = {
	bounceStiffness?: number
	bounceDamping?: number
} & Children

export const Slider = ({
	children,
	bounceStiffness = 100, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
	bounceDamping = 10 // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
}: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const x = useMotionValue<number>(0)

	const { sliderConstraints } = useGetSliderConstraints({ ref })

	const SliderWrap = ({ children }: Children) => {
		return (
			<SliderBox
				ref={ref}
				drag="x"
				initial={{ x: 0 }}
				style={{ x }}
				// style={{ x: scrollXValue }}
				dragConstraints={{
					left: Number(-sliderConstraints),
					right: 0
				}}
				dragTransition={{ bounceStiffness, bounceDamping }}
			>
				{children}
			</SliderBox>
		)
	}

	return <SliderWrap>{children}</SliderWrap>
}
