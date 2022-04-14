import React, { useState } from "react"
import { BurgerMenu } from "./BurgerMenu"
import { BurgerIcon } from "./BurgerIcon"
import { UserMenu } from "./UserMenu"

import style from "./HeaderNav.module.scss"
import Image from "next/image"
import logo from "../../public/punch.png"
import account from "../../public/account.png"

export const HeaderNav = () => {
	const [isBurgerOpen, setBurgerOpen] = useState(false)
	const [isLoginOpen, setLoginOpen] = useState(false)

	const burgerOpenClose = () => {
		setBurgerOpen((isBurgerOpen) => !isBurgerOpen)
	}

	return (
		<>
			<div className={style.header}>
				<div className={style.burgermenu}>
					<BurgerIcon burgerOpenClose={burgerOpenClose} />
				</div>
				<div className={style.logo}>
					<Image src={logo} />
				</div>
				<div className={style.loginmenu}>
					<Image
						onClick={() => {
							setLoginOpen((isLoginOpen) => !isLoginOpen)
						}}
						src={account}
						alt='login'
					/>
				</div>
			</div>
			<div
				className={
					isBurgerOpen
						? style.header__burger_visible
						: style.header__burger_hidden
				}
			>
				<BurgerMenu />
			</div>
			<div
				className={
					isLoginOpen ? style.header__login_visible : style.header__login_hidden
				}
			>
				<UserMenu />
			</div>
		</>
	)
}
