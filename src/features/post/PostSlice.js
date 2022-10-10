import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../utils/Api";

const PostSlice = createSlice({
    name: "post",
    initialState: {
        post: {},
        isLoading: false,
        isError: false,
    },
    reducers: {
        setPost: (state = { post: {}}, action) => {
            state.post = action.payload;
        },
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.post = action;
            state.isLoading = false;
            state.isError = false;
        },
        [fetchPosts.pending]: (state) => {
            state.post = {};
            state.isLoading = true;
            state.isError = false;
        },
        [fetchPosts.rejected]: (state) => {
            state.post = {};
            state.isLoading = false;
            state.isError = true;
        },
    },
});

export const selectPost = (state) => state.post.post;

export const { setPost } = PostSlice.actions;
export default PostSlice.reducer;