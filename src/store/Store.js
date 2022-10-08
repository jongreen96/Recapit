import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddit/subredditSlice';
import postsReducer from '../features/posts/PostsSlice';
import searchReducer from '../features/search/searchSlice';

const store = configureStore({
	reducer: {
		subreddit: subredditReducer,
		posts: postsReducer,
		search: searchReducer,
	},
});

export default store;
