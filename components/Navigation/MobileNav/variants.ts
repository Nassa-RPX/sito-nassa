export const backgroundVariant = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 98% 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		x: 0,
		clipPath: 'circle(0px at 89% 40px)',
		transition: {
			delay: 0.05,
			type: 'spring',
			stiffness: 400,
			damping: 40
		}
	}
}

export const listVariant = {
	open: {
		zIndex: 6,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1
		},
		transitionEnd: { zIndex: 0 }
	}
}

export const itemVariant = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
}
