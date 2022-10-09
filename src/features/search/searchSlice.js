import { createSlice } from '@reduxjs/toolkit';
import { performSearch } from '../../utils/Api';


const searchSlice = createSlice({
	name: 'search',
	initialState: {
		query: '',
		searchResults: [],
		isLoading: false,
		isError: false,
	},
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload;
		},
	},
	extraReducers: {
		[performSearch.fulfilled]: (state, action) => {
			state.searchResults = action.payload;
			state.isLoading = false;
			state.isError = false;
		},
		[performSearch.pending]: (state) => {
			state.searchResults = [];
			state.isLoading = true;
			state.isError = false;
		},
		[performSearch.rejected]: (state) => {
			state.searchResults = [];
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const selectSearch = (state) => state.search;

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
