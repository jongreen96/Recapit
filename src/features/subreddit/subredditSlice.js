import { createSlice } from '@reduxjs/toolkit'
import { fetchSubreddit } from '../../utils/Api';

const subredditSlice = createSlice({
	name: 'subreddit',
	initialState: {
		subreddit: 'formula1',
		subredditInfo: {},
        isLoading: false,
		isError: false,
	},
	reducers: {
		setSubreddit: (state, action) => {
			state.subreddit = action.payload;
		},
	},
	extraReducers: {
		[fetchSubreddit.fulfilled]: (state, action) => {
			state.subredditInfo = action.payload;
			state.isLoading = false;
			state.isError = false;
		},
		[fetchSubreddit.pending]: (state) => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchSubreddit.rejected]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const selectSubreddit = state => state.subreddit;

export const { setSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;