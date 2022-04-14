import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { Card } from "../Card/Card"

import style from "./Paginate.module.scss"

export const PaginatedItems = ({ itemsPerPage, heroes }) => {
	const [currentItems, setCurrentItems] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(heroes.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(heroes.length / itemsPerPage))
	}, [itemOffset, itemsPerPage])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % heroes.length
		setItemOffset(newOffset)
	}

	return (
		<div className={style.card_paginate_combo}>
			<Card currentItems={currentItems} />
			<div className={style.paginate}>
				<ReactPaginate
					breakLabel='...'
					nextLabel='next >'
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel='< previous'
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
