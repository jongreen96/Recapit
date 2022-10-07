import './Posts.css';
import Post from '../post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchPosts, selectSubreddit } from '../../features/subreddit/subredditSlice';
import { useEffect } from 'react';

const Posts = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectPosts);
	const subreddit = useSelector(selectSubreddit);

	useEffect(() => {
		dispatch(fetchPosts(subreddit));
	}, [subreddit, dispatch]);

	console.log(posts[6]);

	return (
		<div className='posts'>
			{posts.map((post, i) => {
				return <Post data={post} key={i} />;
			})}
		</div>
	);
};

export default Posts;
