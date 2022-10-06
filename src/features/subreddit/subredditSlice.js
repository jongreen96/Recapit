import { createSlice } from '@reduxjs/toolkit';

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        subreddit: 'all',
    },
    reducers: {
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
        },
    },
});

export const selectSubreddit = state => state.subreddit.subreddit;

export const { setSubreddit } = subredditSlice.actions;
