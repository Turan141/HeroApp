import React, { useState } from "react"
import { BurgerMenu } from "./BurgerMenu"
import style from "./HeaderNav.module.scss"
import Image from "next/image"
import logo from "../../public/vectorpaint.svg"
import burgerIcon from "../../public/list.png"
import account from "../../public/account.png"

export const UserMenu = () => {
	return (
		<form>
			<label>Login</label>
			<input type='text' />
			<label>Password</label>
			<input type='password' />
			<input className={style.login__form_sumbit} type='submit' />
		</form>
	)
}

export const HeaderNav = () => {
	const [isBurgerOpen, setBurgerOpen] = useState(false)
	const [isLoginOpen, setLoginOpen] = useState(false)
	return (
		<>
			<div className={style.header}>
				<Image
					onClick={() => {
						setBurgerOpen((isBurgerOpen) => !isBurgerOpen)
					}}
					src={burgerIcon}
					alt='burger'
					width='30'
				/>
				<Image src={logo} width='54' />
				<Image
					onClick={() => {
						setLoginOpen((isLoginOpen) => !isLoginOpen)
					}}
					src={account}
					alt='burger'
					width='48'
				/>
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
