import { PaginatedItems } from "../paginate/PaginatedItems"

import style from "./CardList.module.scss"

export const CardList = ({ heroes }) => {
	console.log(heroes.slice(0, 2))
	return (
		<div className={style.card_list}>
			<PaginatedItems heroes={heroes} itemsPerPage={9} />
		</div>
	)
}
