import { createSlice } from '@reduxjs/toolkit';
import { fetchPost } from '../../utils/Api';

const PostSlice = createSlice({
	name: 'post',
	initialState: {
		post: {},
		isLoading: false,
		isError: false,
	},
	reducers: {
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

export default PostSlice.reducer;
