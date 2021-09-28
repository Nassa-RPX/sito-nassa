import type { AppProps } from 'next/app'
import 'public/assets/reset.css'
import 'public/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
export default MyApp
