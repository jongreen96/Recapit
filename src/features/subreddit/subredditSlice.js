import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'subreddit/fetchPosts',
    async (subreddit) => {
        const response = await fetch(
            `https://www.reddit.com/r/${subreddit}/top/.json`
        );
        const data = await response.json();
        return data.data.children.map((post) => post.data);
    }
);

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        subreddit: 'all',
        posts: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
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
        }
    },
});

export const selectSubreddit = state => state.subreddit.subreddit;
export const selectPosts = state => state.subreddit.posts;

export const { setSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;