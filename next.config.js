const withFonts = require('next-fonts')

// module.exports = {
// 	reactStrictMode: true
// }

module.exports = {
	images: {
		domains: ['images.ctfassets.net']
	},
	...withFonts()
}
