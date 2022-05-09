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
			<div
				key={item.id}
				className={style.person__card}
				draggable={true}
			>
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
					<h2 className={style.rank}>
						{getAvrgRank(item)}
					</h2>
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
				<div className={style.spinner}>
					<svg
						role='status'
						className='inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600'
						viewBox='0 0 100 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='currentColor'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='currentFill'
						/>
					</svg>
				</div>
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
