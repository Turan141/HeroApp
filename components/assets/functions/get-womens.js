export const sortByFemale = (arg) => {
	let charsList = arg.filter((elem) => {
		return elem.appearance.gender === "Female"
	})
	localStorage.setItem(
		"characters",
		JSON.stringify(charsList)
	)
}
