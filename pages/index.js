import { CardsMainWindow } from "../components/main-cards-window/card-list/CardsMainWindow"
import store from "./redux-state/store"
import { Provider } from "react-redux"

const Home = ({ heroes }) => {
	return (
		<div>
			<CardsMainWindow heroes={heroes} />
		</div>
	)
}

export async function getStaticProps() {
	const res = await fetch(
		"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
	)
	const heroes = await res.json()

	return {
		props: {
			heroes,
		},
	}
}
export default Home
