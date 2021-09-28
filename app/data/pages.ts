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
