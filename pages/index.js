import { CardsMainWindow } from "../components/main-cards-window/card-list/CardsMainWindow"

const Home = () => {
	return (
		<div>
			<CardsMainWindow />
		</div>
	)
}

// export async function getStaticProps() {
// 	const res = await fetch(
// 		"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
// 	)
// 	const heroes = await res.json()

// 	return {
// 		props: {
// 			heroes,
// 		},
// 	}
// }
export default Home
