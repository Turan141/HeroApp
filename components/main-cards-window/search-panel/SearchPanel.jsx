import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import style from "./SearchPanel.module.scss"

export const SearchPanel = () => {
	const [filterType, setFilterType] = useState("All Heroes")
	const dispatch = useDispatch()

	const chars = useSelector((state) => state.chars)


	// const sortByRankHandler = () => {
	// 	data.slice().sort(function (a, b) {
	// 		if (
	// 			(a.powerstats.strength +
	// 				a.powerstats.intelligence +
	// 				a.powerstats.speed +
	// 				a.powerstats.durability +
	// 				a.powerstats.power +
	// 				a.powerstats.combat) /
	// 				6 >
	// 			(b.powerstats.strength +
	// 				b.powerstats.intelligence +
	// 				b.powerstats.speed +
	// 				b.powerstats.durability +
	// 				b.powerstats.power +
	// 				b.powerstats.combat) /
	// 				6
	// 		) {
	// 			return 1
	// 		}
	// 		if (
	// 			(a.powerstats.strength +
	// 				a.powerstats.intelligence +
	// 				a.powerstats.speed +
	// 				a.powerstats.durability +
	// 				a.powerstats.power +
	// 				a.powerstats.combat) /
	// 				6 <
	// 			(b.powerstats.strength +
	// 				b.powerstats.intelligence +
	// 				b.powerstats.speed +
	// 				b.powerstats.durability +
	// 				b.powerstats.power +
	// 				b.powerstats.combat) /
	// 				6
	// 		) {
	// 			return -1
	// 		}
	// 		return 0
	// 	})
	// 	console.log(data)
	// }

	return (
		<div className={style.search_comp}>
			<div className={style.blank}></div>
			<div className={style.search_panel}>
				<div className={style.filter_name}>
					<h1>Filter</h1>
				</div>
				<input
					placeholder='Search for character'
					className={style.filter_input}
					type='text'
				/>
				<select
					onChange={sortByRankHandler}
					className={style.persona_filter_select}
				>
					<option>All Heroes</option>
					<option>Most Powerful</option>
					<option>Male</option>
					<option>Female</option>
				</select>
			</div>
		</div>
	)
}
