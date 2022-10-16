import './Posts.css';
import Post from '../post/Post';
import LoadingPosts from './LoadingPosts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSubreddit } from '../../features/subreddit/subredditSlice';
import { selectPosts } from '../../features/posts/PostsSlice';
import { fetchPosts } from '../../utils/Api';

const Posts = () => {
	const dispatch = useDispatch();
	const { posts, time, isLoading, isError } = useSelector(selectPosts);
	const { subreddit } = useSelector(selectSubreddit);

	useEffect(() => {
		const data = { subreddit, time };
		dispatch(fetchPosts(data));
	}, [subreddit, time, dispatch]);

	if (isLoading) return <LoadingPosts />;

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
