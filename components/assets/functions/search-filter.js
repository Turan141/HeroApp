export const searchFilter = (arg, input) => {
	let charsList = arg.filter((elem) => {
		return elem.name.includes(input)
	})
	localStorage.setItem(
		"characters",
		JSON.stringify(charsList)
	)
}
