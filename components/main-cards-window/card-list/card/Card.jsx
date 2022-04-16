import Image from "next/image"

import speed from "../../../../public/svg/speed-svgrepo-com.svg"
import strenght from "../../../../public/svg/strength-svgrepo-com.svg"
import intelligence from "../../../../public/svg/bulb-svgrepo-com.svg"
import fight from "../../../../public/svg/fight-svgrepo-com.svg"
import force from "../../../../public/svg/lightning-svgrepo-com.svg"
import durability from "../../../../public/svg/power-svgrepo-com.svg"
import easy from "../../../../public/svg/ranks/easy.svg"
import easymedium from "../../../../public/svg/ranks/easymedium.svg"
import medium from "../../../../public/svg/ranks/medium.svg"
import mediumhigh from "../../../../public/svg/ranks/mediumhigh.svg"
import high from "../../../../public/svg/ranks/high.svg"
import elite from "../../../../public/svg/ranks/elite.svg"

import style from "./Card.module.scss"

export function Card({ currentItems, isLoading, error }) {
	const HEIGHT = "20px"
	const WIDTH = "20px"

	const getAvrgScore = (arg) => {
		let avrgScore =
			(arg.powerstats.strength +
				arg.powerstats.intelligence +
				arg.powerstats.speed +
				arg.powerstats.durability +
				arg.powerstats.power +
				arg.powerstats.combat) /
			6
		if (avrgScore <= 20) {
			return easy
		}
		if (avrgScore > 20 && avrgScore <= 40) {
			return easymedium
		}
		if (avrgScore > 40 && avrgScore <= 60) {
			return medium
		}
		if (avrgScore > 60 && avrgScore <= 80) {
			return mediumhigh
		}
		if (avrgScore > 80 && avrgScore < 90) {
			return high
		}
		if (avrgScore >= 90) {
			return elite
		}
	}

	const getAvrgRank = (arg) => {
		let avrgScore =
			(arg.powerstats.strength +
				arg.powerstats.intelligence +
				arg.powerstats.speed +
				arg.powerstats.durability +
				arg.powerstats.power +
				arg.powerstats.combat) /
			6
		if (avrgScore <= 20) {
			return "Rank D"
		}
		if (avrgScore > 20 && avrgScore <= 40) {
			return "Rank C"
		}
		if (avrgScore > 40 && avrgScore <= 60) {
			return "Rank B"
		}
		if (avrgScore > 60 && avrgScore <= 80) {
			return "Rank A"
		}
		if (avrgScore > 80 && avrgScore < 90) {
			return "Rank S"
		}
		if (avrgScore >= 90) {
			return "Rank S+"
		}
	}

	const map = currentItems ? (
		currentItems.map((item) => (
			<div key={item.id} className={style.person__card}>
				<div className={style.img}>
					<Image
						className={style.blur}
						src={item.images.xs}
						height='150px'
						width='250px'
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
				<div className={style.badge}>
					<Image
						src={getAvrgScore(item)}
						width='70px'
						height='70px'
					/>
					<h2 className={style.rank}>{getAvrgRank(item)}</h2>
				</div>
				<div className={style.person_info}>
					<h1>{item.name}</h1>
					<h2>
						{item.appearance.race
							? item.appearance.race
							: "Unknown"}
					</h2>
					<div className={style.stat_div}>
						<ul className={style.card_stats}>
							<div className={style.left_stat}>
								<li
									id={
										item.powerstats.combat > 80
											? style.good__fight
											: item.powerstats.combat < 30
											? style.low__stat
											: null
									}
								>
									<Image
										width={WIDTH}
										height={HEIGHT}
										src={fight}
									/>
									<a>
										Combat:
										{item.powerstats.combat}
									</a>
								</li>
								<li
									id={
										item.powerstats.durability > 80
											? style.good__durability
											: item.powerstats.durability < 30
											? style.low__stat
											: null
									}
								>
									<Image
										width={WIDTH}
										height={HEIGHT}
										src={durability}
									/>
									Durability:
									{item.powerstats.durability}
								</li>
								<li
									id={
										item.powerstats.intelligence > 80
											? style.good__intellect
											: item.powerstats.intelligence < 30
											? style.low__stat
											: null
									}
								>
									<Image
										width={WIDTH}
										height={HEIGHT}
										src={intelligence}
									/>
									Intellect:
									{item.powerstats.intelligence}
								</li>
							</div>
							<div className={style.right_stat}>
								<li
									id={
										item.powerstats.speed > 80
											? style.good__speed
											: item.powerstats.speed < 30
											? style.low__stat
											: null
									}
								>
									<Image
										width={WIDTH}
										height={HEIGHT}
										src={speed}
									/>
									Speed:
									{item.powerstats.speed}
								</li>
								<li
									id={
										item.powerstats.power > 80
											? style.good__power
											: item.powerstats.power < 30
											? style.low__stat
											: null
									}
								>
									<Image
										width={WIDTH}
										height={HEIGHT}
										src={force}
									/>
									Power:
									{item.powerstats.power}
								</li>
								<li
									id={
										item.powerstats.strength > 80
											? style.good__strength
											: item.powerstats.strength < 30
											? style.low__stat
											: null
									}
								>
									<Image
										width={WIDTH}
										height={HEIGHT}
										src={strenght}
									/>
									Strength:
									{item.powerstats.strength}
								</li>
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

	return (
		<>
			{isLoading ? (
				"Loading..."
			) : error ? (
				"error..."
			) : (
				<>
					<div className={style.card_map}>{map}</div>
				</>
			)}
		</>
	)
}
