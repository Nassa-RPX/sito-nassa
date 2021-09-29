import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useState } from 'react'
import styled from 'styled-components'

import { swipeConfidenceThreshold, swipePower, variants } from './slide'

type Props = {
	images: Array<string>
}

export const SlideContainer = ({ images }: Props): JSX.Element => {
	const [[page, direction], setPage] = useState([0, 0])

	const imageIndex = wrap(0, images.length, page)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					custom={direction}
					src={images[imageIndex]}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 200, damping: 10 },
						opacity: { duration: 0.2 }
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x)

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1)
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1)
						}
					}}
				></motion.img>
			</AnimatePresence>

			<Control type={'prev'} onClick={() => paginate(-1)}>
				-
			</Control>
			<Control type={'next'} onClick={() => paginate(1)}>
				+
			</Control>
		</>
	)
}

const Control = styled.span<{ type: 'prev' | 'next' }>`
	position: absolute;
	cursor: pointer;

	top: 50%;
	left: ${(props) => (props.type === 'prev' ? '0' : 'inherit')};
	right: ${(props) => (props.type === 'next' ? '0' : 'inherit')};
`
