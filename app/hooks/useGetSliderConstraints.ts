import React, { useState, useEffect } from 'react'

type Arguments = {
	ref: React.RefObject<HTMLDivElement>
}

type ReturnType = {
	sliderConstraints: number
}

export const useGetSliderConstraints = ({ ref }: Arguments): ReturnType => {
	const [sliderWidth, setSliderWidth] = useState<number>(0)
	const [sliderChildWidth, setSliderChildWidth] = useState<number>(100)
	const [sliderChildrenWidth, setSliderChildrenWidth] = useState<number>(0)
	const [sliderConstraints, setSliderConstraints] = useState<number>(0)

	useEffect(() => {
		//calculate the sum of the children's width
		const calcSliderChildrenWidth = () => {
			setSliderChildrenWidth(
				ref.current
					? Array.from(
							ref.current.childNodes as NodeListOf<HTMLDivElement>
					  ).reduce((acc, node) => acc + Number(node.clientWidth), 0)
					: 0
			)
		}

		// get a single element width as a threshold
		if (ref.current) {
			const nodes = ref.current.childNodes as NodeListOf<HTMLDivElement>
			const node = nodes[0]

			setSliderChildWidth(node.clientWidth / 3)
		}

		calcSliderChildrenWidth()

		// get the width of the slider container
		const calcSliderWidth = () => {
			setSliderWidth(ref.current ? ref.current.clientWidth : 0)
		}

		calcSliderWidth()

		window.addEventListener('resize', calcSliderWidth)

		const calcSliderConstraints = () => {
			setSliderConstraints(sliderChildrenWidth - sliderWidth + sliderChildWidth)
		}

		calcSliderConstraints()
		window.addEventListener('resize', calcSliderConstraints)
	}, [ref, sliderChildrenWidth, sliderWidth, sliderChildWidth])

	return { sliderConstraints }
}
