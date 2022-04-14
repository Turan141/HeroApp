import Image from "next/image"

import style from "./Card.module.scss"

export const Card = ({ currentItems }) => {
	console.log(currentItems)
	const map = currentItems ? (
		currentItems.map((item) => (
			<div key={item.id} className={style.person__card}>
				<div className={style.img}>
					<Image
						className={style.blur}
						src={item.images.xs}
						height='150px'
						width='225px'
					/>
				</div>
				<div className={style.rounded_avatar}>
					<Image
						className={style.char_avatar}
						src={item.images.sm}
						width='150px'
						height='150px'
					/>
				</div>
				<div className={style.person_info}>
					<h1>{item.name}</h1>
					<h2>{item.appearance.race ? item.appearance.race : "Unknown"}</h2>
					<div className={style.stat_div}>
						<ul className={style.card_stats}>
							<div className={style.left_stat}>
								<li>Combat: {item.powerstats.combat}</li>
								<li>Durability: {item.powerstats.durability}</li>
								<li>Intelligence: {item.powerstats.intelligence}</li>
							</div>
							<div className={style.right_stat}>
								<li>Speed: {item.powerstats.speed}</li>
								<li>Power: {item.powerstats.power}</li>
								<li>Strength: {item.powerstats.strength}</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		))
	) : (
		<div>
			<h1>Loading...</h1>
		</div>
	)

	return <div className={style.card_map}>{map}</div>
}
