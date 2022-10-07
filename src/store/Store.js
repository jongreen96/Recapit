import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";
import postsReducer from "../features/posts/PostsSlice";

const store = configureStore({
    reducer: {
        subreddit: subredditReducer,
        posts: postsReducer,
    },
});

export default store;