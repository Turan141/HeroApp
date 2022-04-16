import { PaginatedItems } from "../paginate/PaginatedItems"
import style from "./CardList.module.scss"

export function CardList() {
	return (
		<div className={style.card_list}>
			<PaginatedItems itemsPerPage={9} />
		</div>
	)
}
