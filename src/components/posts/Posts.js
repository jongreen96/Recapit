import './Posts.css';
import Post from '../post/Post';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectPosts,
	fetchPosts,
	selectSubreddit,
} from '../../features/subreddit/subredditSlice';
import { useEffect } from 'react';

const Posts = () => {
	const dispatch = useDispatch();
	const { subreddit, posts, isLoading, isError } = useSelector(selectSubreddit);

	useEffect(() => {
		dispatch(fetchPosts(subreddit));
	}, [subreddit, dispatch]);

	if (isLoading) return <div className='posts'>Loading...</div>;

	if (isError) return <div className='posts'>Error!</div>;

	return (
		<div className='posts'>
			{posts.map((post, i) => {
				return <Post data={post} key={i} />;
			})}
		</div>
	);
};

export default Posts;
