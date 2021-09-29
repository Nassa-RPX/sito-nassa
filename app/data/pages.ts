export type Page = { name: string; url: string }

export type Pages = Page[]

export const pages: Pages = [
	{
		name: 'Home',
		url: '/'
	},

	{
		name: 'Chi siamo',
		url: '/chi-siamo'
	},

	{
		name: 'Contatti',
		url: '/contatti'
	},

	{
		name: 'Milestones',
		url: '/milestones'
	}
]

type HomeDataType = {
	nassaList: {
		title: string
		action: {
			description: string
			cta: string
		}
	}
}

export const HomeData: HomeDataType = {
	nassaList: {
		title: 'LE NASSE',
		action: {
			description: 'Vuoi fondare una nuova Nassa?',
			cta: 'Leggi'
		}
	}
}
