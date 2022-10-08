import { createSlice } from '@reduxjs/toolkit';
import { performSearch } from '../../utils/Api';


const searchSlice = createSlice({
	name: 'search',
	initialState: {
		query: '',
		searchResults: [],
	},
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload;
		},
	},
	extraReducers: {
		[performSearch.fulfilled]: (state, action) => {
			state.searchResults = action.payload.data;
		},
		[performSearch.pending]: (state) => {
			state.searchResults = [];
		},
		[performSearch.rejected]: (state) => {
			state.searchResults = [];
		},
	},
});

export const selectSearch = (state) => state.search;

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
