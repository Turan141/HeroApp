import { useState } from "react"

import style from "./SearchPanel.module.scss"

export const SearchPanel = () => {
	const [filterType, setFilterType] = useState("All Heroes")
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
				<select className={style.persona_filter_select}>
					<option>All Heroes</option>
					<option>Most Powerful</option>
					<option>Male</option>
					<option>Female</option>
				</select>
			</div>
		</div>
	)
}
