import { createSlice } from '@reduxjs/toolkit';
import { fetchPost } from '../../utils/Api';

const PostSlice = createSlice({
	name: 'post',
	initialState: {
		post: [],
		isLoading: true,
		isError: false,
	},
	reducers: {
		setPost: (state, action) => {
			state.post = action.payload;
		},
	},
	extraReducers: {
		[fetchPost.fulfilled]: (state, action) => {
			state.post = action.payload;
			state.isLoading = false;
			state.isError = false;
		},
		[fetchPost.pending]: (state) => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchPost.rejected]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const selectPost = (state) => state.post;

export const { setPost } = PostSlice.actions;
export default PostSlice.reducer;
