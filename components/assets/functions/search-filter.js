export const searchFilter = (arg, input) => {
	let charsList = arg.filter((elem) => {
		return elem.name.toLowerCase().includes(input.target.value)
	})
	localStorage.setItem(
		"characters",
		JSON.stringify(charsList)
	)
}
