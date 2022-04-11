import React from "react"
import Link from "next/link"


export const BurgerMenu = () => {
	return (
		<ul>
			<Link href='/'>
				<li>
					<a>Home</a>
				</li>
			</Link>
			<Link href='/about'>
				<li>
					<a>About</a>
				</li>
			</Link>
			<Link href='/top25'>
				<li>
					<a>Top-25</a>
				</li>
			</Link>
			<Link href='/shop'>
				<li>
					<a>Shop</a>
				</li>
			</Link>
		</ul>
	)
}
