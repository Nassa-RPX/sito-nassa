import { createSpacing } from 'spacing-helper'
import { DefaultTheme } from 'styled-components/'

const theme: DefaultTheme = {
	palette: {
		bg: '#ffffff',
		blueNassa: '#0075BF',
		yellowNassa: '#F7A600',
		blackNassa: '#1c1c1c',
		grayNassa: '#767676',
		lightBlueNassa: '#BDE5FF',
		whiteNassa: '#FFFFFF'
	},
	typo: {
		family: {
			main: 'Nassa, sans-serif',
			bold: '"Nassa Bold", sans-serif',
			light: '"Nassa Light", sans-serif',
			heading: "'Bebas Neue', cursive"
		},
		size: {
			heading1: '48px',
			heading2: '30px',
			heading3: '24px',
			paragraph: '18px',
			detail: '16px'
		}
	},

	radius: {
		regular: '8px',
		small: '6px'
	},

	spacing: createSpacing({ factor: 1, units: 'rem' })
}

export default theme
