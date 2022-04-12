import React from "react"
import style from "./HeaderNav.module.scss"

export const BurgerIcon = () => {
	return (
		<div className={style.burger__div}>
			<div className={style.burger__one}></div>
			<div className={style.burger__two}></div>
		</div>
	)
}
