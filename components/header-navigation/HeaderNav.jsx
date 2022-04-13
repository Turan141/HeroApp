import React, { useState } from "react"
import { BurgerMenu } from "./BurgerMenu"
import { InputForm } from "./InputForm"
import { BurgerIcon } from "./BurgerIcon"

import style from "./HeaderNav.module.scss"
import Image from "next/image"
import logo from "../../public/vectorpaint.svg"
import account from "../../public/account.png"

export const UserMenu = () => {
	return (
		<>
			<InputForm />
		</>
	)
}

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
						alt='burger'
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
