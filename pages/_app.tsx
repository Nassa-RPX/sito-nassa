import type { AppProps } from "next/app";
import "assets/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
