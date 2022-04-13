import { useState } from "react"
import style from "./HeaderNav.module.scss"

export const BurgerIcon = ({ burgerOpenClose }) => {
	const [bugerOpen, setBugerOpen] = useState(false)

	const burgerHandlerFn = () => {
		setBugerOpen((state) => !state)
		burgerOpenClose()
	}

	return (
		<div
			onClick={burgerHandlerFn}
			className={bugerOpen ? style.burger__div_opened : style.burger__div}
		>
			<div className={style.burger__lines}></div>
		</div>
	)
}
