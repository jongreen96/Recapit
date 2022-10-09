import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../../utils/Api';

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		time: 'week',
		isLoading: false,
		isError: false,
	},
	reducers: {
		setTime: (state, action) => {
			state.time = action.payload;
		},
	},
	extraReducers: {
		[fetchPosts.fulfilled]: (state, action) => {
			state.posts = action.payload;
			state.isLoading = false;
			state.isError = false;
		},
		[fetchPosts.pending]: (state) => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchPosts.rejected]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const selectPosts = (state) => state.posts;

export const { setTime } = postsSlice.actions;
export default postsSlice.reducer;
