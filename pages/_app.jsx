import { HeaderNav } from "../components/header-navigation/HeaderNav"
import "../styles/globals.css"
import { store } from "../redux-state/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<HeaderNav />
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default MyApp
