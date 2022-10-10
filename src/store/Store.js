import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddit/subredditSlice';
import postsReducer from '../features/posts/PostsSlice';
import postReducer from '../features/post/PostSlice';
import searchReducer from '../features/search/searchSlice';

const store = configureStore({
	reducer: {
		subreddit: subredditReducer,
		posts: postsReducer,
		search: searchReducer,
		post: postReducer,
	},
});

export default store;
