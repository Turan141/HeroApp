export const sortByMinRankHandler = (arg) => {
	arg.sort(function (a, b) {
		if (
			(a.powerstats.strength +
				a.powerstats.intelligence +
				a.powerstats.speed +
				a.powerstats.durability +
				a.powerstats.power +
				a.powerstats.combat) /
				6 >
			(b.powerstats.strength +
				b.powerstats.intelligence +
				b.powerstats.speed +
				b.powerstats.durability +
				b.powerstats.power +
				b.powerstats.combat) /
				6
		) {
			return 1
		}
		if (
			(a.powerstats.strength +
				a.powerstats.intelligence +
				a.powerstats.speed +
				a.powerstats.durability +
				a.powerstats.power +
				a.powerstats.combat) /
				6 <
			(b.powerstats.strength +
				b.powerstats.intelligence +
				b.powerstats.speed +
				b.powerstats.durability +
				b.powerstats.power +
				b.powerstats.combat) /
				6
		) {
			return -1
		}
		return 0
	})
	localStorage.setItem("characters", JSON.stringify(arg))
}
