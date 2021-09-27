import nassaBold from 'public/assets/font/nassa-bold.otf'
import nassaLight from 'public/assets/font/nassa-light.otf'
import nassaRegular from 'public/assets/font/nassa-regular.otf'
import { css } from 'styled-components'

const fontsFaces = {
	regular: css`
		@font-face {
			font-family: 'Nassa';
			src: local('Nassa'), url(${nassaRegular}) format('otf');
			font-weight: 400;
			font-style: normal;
		}
	`,

	bold: css`
		@font-face {
			font-family: 'Nassa Bold';
			src: local('Nassa Bold'), url(${nassaBold}) format('otf');
			font-weight: 700;
			font-style: normal;
		}
	`,

	light: css`
		font-family: 'Nassa Light';
		src: local('Nassa Light'), url(${nassaLight}) format('otf');
		font-weight: 200;
		font-style: normal;
	`
}

export default fontsFaces
