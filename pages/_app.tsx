import type { AppProps } from 'next/app'
import 'public/assets/reset.css'
import 'public/styles.css'

import { Root } from 'components/Root'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Root>
			<Component {...pageProps} />
		</Root>
	)
}
export default MyApp
