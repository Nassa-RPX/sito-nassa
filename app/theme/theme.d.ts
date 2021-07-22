import { ISpacingFn } from 'spacing-helper'
import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			bg: string
			blueNassa: string
			yellowNassa: string
			blackNassa: string
			grayNassa: string
			lightBlueNassa: string
			whiteNassa: string
		}

		typo: {
			family: {
				main: string
				bold: string
				light: string
				heading: string
			}
			size: {
				heading1: string
				heading2: string
				heading3: string
				paragraph: string
				detail: string
			}
		}

		radius: {
			regular: string
			small: string
		}

		spacing: ISpacingFn
	}
}
