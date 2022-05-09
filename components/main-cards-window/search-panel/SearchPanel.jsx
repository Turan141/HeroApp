import { useState, useMemo, useEffect } from "react"
import { sortByMaxRankHandler } from "../../assets/functions/get-most-valuable"
import { sortByMinRankHandler } from "../../assets/functions/get-weakest"
import { sortByFemale } from "../../assets/functions/get-womens"
import { sortByMale } from "../../assets/functions/get-mans"
import { searchFilter } from "../../assets/functions/search-filter"

import style from "./SearchPanel.module.scss"

export const SearchPanel = () => {
	let charsList
	let reservState

	useEffect(() => {
		charsList = JSON.parse(
			localStorage.getItem("characters")
		)
		reservState = JSON.parse(JSON.stringify(charsList))
	}, [])

	console.log(reservState)

	// useEffect(() => {
	// 	setReservState(JSON.parse(JSON.stringify(charsList)))
	// 	console.log(reservState)
	// }, [charsList])

	const filterChangeHandler = (e) => {
		localStorage.setItem(
			"characters",
			JSON.stringify(reservState)
		)
		if (e.target.value === "max-rank") {
			sortByMaxRankHandler(charsList)
		}
		if (e.target.value === "min-rank") {
			sortByMinRankHandler(charsList)
		}
		if (e.target.value === "female") {
			sortByFemale(charsList)
		}
		if (e.target.value === "male") {
			sortByMale(charsList)
		}
	}



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
					onInput={(input)=>{searchFilter(charsList, input)}}
				/>
				<select
					onChange={filterChangeHandler}
					className={style.persona_filter_select}
				>
					<option>All Heroes</option>
					<option value='max-rank'>Most Powerful</option>
					<option value='min-rank'>Most Weakests</option>
					<option value='female'>Female</option>
					<option value='male'>Male</option>
				</select>
			</div>
		</div>
	)
}
