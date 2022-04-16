import {
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

export const charactersApi = createApi({
	reducerPath: "charactersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/",
	}),
	endpoints: (builder) => ({
		getCharacters: builder.query({
			query: (chars) => `${chars}.json`,
		}),
	}),
})

export const { useGetCharactersQuery } = charactersApi
// all.json