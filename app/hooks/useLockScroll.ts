import { useEffect } from 'react'

type Arguments = {
	lock: boolean
}

export const useLockScroll = ({ lock }: Arguments): void => {
	useEffect(() => {
		if (lock) {
			// Get original body overflow
			const originalStyle = window.getComputedStyle(document.body).overflow
			// Prevent scrolling on mount
			document.body.style.overflow = 'hidden'
			// Re-enable scrolling when component unmounts
			return () => {
				document.body.style.overflow = originalStyle
			}
		}
	}, [lock])
}
