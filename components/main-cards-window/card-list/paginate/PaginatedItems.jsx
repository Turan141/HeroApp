import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { Card } from '../card/Card'
import { useGetCharactersQuery } from "../../../../redux-state/query"

import style from "./Paginate.module.scss"

export const PaginatedItems = ({ itemsPerPage }) => {
	const [currentItems, setCurrentItems] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	const { data, isLoading, error } =
		useGetCharactersQuery("all")

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		data && setCurrentItems(data.slice(itemOffset, endOffset))
		data && setPageCount(Math.ceil(data.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, data])

	const handlePageClick = (event) => {
		const newOffset =
			(event.selected * itemsPerPage) % data.length
		setItemOffset(newOffset)
	}

	return (
		<div className={style.card_paginate_combo}>
			<Card
				currentItems={currentItems}
				isLoading={isLoading}
				error={error}
			/>
			<div className={style.paginate}>
				<ReactPaginate
					breakLabel='...'
					nextLabel='next'
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel='prev'
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
