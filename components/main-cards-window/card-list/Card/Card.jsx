import Image from "next/image"

import style from "./Card.module.scss"

export const Card = ({ currentItems }) => {
	const map = currentItems ? (
		currentItems.map((item) => (
			<div className={style.person__card}>
				<div className={style.img}>
					<Image
						className={style.blur}
						src={item.images.sm}
						// width='160px'
						// height='240px'
						height='120px'
						width='160px'
					/>
				</div>
				<div className='style person_info'>
					<h1>{item.name}</h1>
					<h2>{item.race}</h2>
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
