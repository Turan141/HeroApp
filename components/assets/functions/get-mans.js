export const sortByMale = (arg) => {
	let charsList = arg.filter((elem) => {
		return elem.appearance.gender === 'Male'
	})
	localStorage.setItem("characters", JSON.stringify(charsList))
}
