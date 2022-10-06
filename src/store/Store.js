import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../features/subreddit/subredditSlice";

const store = configureStore({
    reducer: {
        subreddit: subredditReducer,
    },
});

export default store;