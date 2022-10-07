import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchSubreddit = createAsyncThunk(
	'subreddit/fetchSubreddit',
	async (subreddit) => {
		const response = await fetch(
			`https://www.reddit.com/r/${subreddit}/about.json`
		);
		const data = await response.json();
		return data.data;
	}
);