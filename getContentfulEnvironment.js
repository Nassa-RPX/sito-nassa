require('dotenv').config({ path: './.env.local' })
const contentfulManagement = require('contentful-management')

// const spaceId = 'e3jmxb577d5m'
// const token = 'CFPAT-1VeRDi4mwd8Xlzj7bMWLf3m6zk6OUhz-Tz5TyVcut_w'
// const env = 'master'

module.exports = function () {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.GEN_TOKEN
	})

	return contentfulClient
		.getSpace(process.env.SPACE)
		.then((space) => space.getEnvironment(process.env.ENVIRONMENT))
		.catch((e) => console.error('error:', e))
}
