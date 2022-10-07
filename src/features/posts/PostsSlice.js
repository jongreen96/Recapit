import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../utils/Api";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
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

export const selectPosts = state => state.posts;

export default postsSlice.reducer;