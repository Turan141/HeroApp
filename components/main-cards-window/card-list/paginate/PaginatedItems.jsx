import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { Card } from "../card/Card"

import { useGetCharactersQuery } from "../../../../redux-state/query"

import style from "./Paginate.module.scss"

export const PaginatedItems = ({ itemsPerPage }) => {
	const [currentItems, setCurrentItems] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)
	const [charactersFromStorage, setCharacters] = useState(
		[]
	)

	const { data, isLoading, isSuccess, isError, error } =
		useGetCharactersQuery("all")

		useEffect(() => {
			localStorage.setItem(
				"characters",
				JSON.stringify(data)
			)
		}, [isSuccess, data, isLoading])
		

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage


		if (isSuccess) {
			try {
				setCharacters(
					JSON.parse(localStorage.getItem("characters"))
				)
			} catch (err) {
				console.log("Error: ", err.message)
			}

			setCurrentItems(
				charactersFromStorage.slice(itemOffset, endOffset)
			)

			setPageCount(
				Math.ceil(
					charactersFromStorage.length / itemsPerPage
				)
			)
		}
	}, [
		data,
		isLoading,
		itemOffset,
		itemsPerPage,
		isSuccess,
		charactersFromStorage,
	])

	const handlePageClick = (event) => {
		const newOffset =
			(event.selected * itemsPerPage) %
			charactersFromStorage.length
		setItemOffset(newOffset)
	}

	return (
		<div className={style.card_paginate_combo}>
			<Card
				currentItems={currentItems}
				isLoading={isLoading}
				error={error}
				draggable={true}
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
