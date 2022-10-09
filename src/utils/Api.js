import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
	'subreddit/fetchPosts',
	async ({ subreddit, time }) => {
		const response = await fetch(
			`https://www.reddit.com/r/${subreddit}/top/.json?t=${time}`
		);
		const data = await response.json();
		return data.data.children.map((post) => post.data);
	}
);

export const fetchSubreddit = createAsyncThunk(
	'subreddit/fetchSubreddit',
	async (subreddit) => {
		if (subreddit === 'all') {
			return {
				display_name: subreddit,
				public_description: 'The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.',
				subscribers: 'N/A',
				active_user_count: 'N/A',
			};
		}
		const response = await fetch(
			`https://www.reddit.com/r/${subreddit}/about.json`
		);
		const data = await response.json();
		if (!data.data) {
			return {
				display_name: subreddit,
				public_description: 'Unable to display subreddit',
				subscribers: 'N/A',
				active_user_count: 'N/A',
			};
		}
		return data.data;
	}
);

export const performSearch = createAsyncThunk(
	'search/performSearch',
	async (query) => {
		const response = await fetch(
			`https://www.reddit.com/subreddits/search.json?q=${query}&limit=50`
		);
		const data = await response.json();
		return data.data.children.map((subreddit) => subreddit.data);
	}
);
