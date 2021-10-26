import { createClient } from 'contentful'
import 'dayjs/locale/it'
import type { AppProps } from 'next/app'
import 'public/assets/reset.css'
import 'public/styles.css'

import { Root } from 'components/Root'

export const client = createClient({
	space: process.env.NEXT_PUBLIC_SPACE || '',
	accessToken: process.env.NEXT_PUBLIC_API_TOKEN || ''
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Root>
			<Component {...pageProps} />
		</Root>
	)
}
export default MyApp
