import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	chars: [],
}

export const charactersApiSlice = createSlice({
	name: "charactersApi",
	initialState,
	reducers: {
		sortByRank: (state, action) => {
			state.sort(function (a, b) {
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
		},
	},
})

export const { sortByRank } = charactersApiSlice.actions

export default charactersApiSlice.reducer
