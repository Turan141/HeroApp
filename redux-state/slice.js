import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	basket: [],
}

export const charactersApiSlice = createSlice({
	name: "charactersApi",
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			state.push(action.payload)
		},
	},
})

export const { addToBasket } = charactersApiSlice.actions

export default charactersApiSlice.reducer
