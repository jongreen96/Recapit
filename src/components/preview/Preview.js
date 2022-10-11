import './Preview.css';
import Media from '../media/Media';
import Comments from '../comments/Comments';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectPost } from '../../features/post/PostSlice';
import { selectPosts } from '../../features/posts/PostsSlice';
import { fetchPost } from '../../utils/Api';

const Preview = () => {
	const dispatch = useDispatch();
	const { post, isLoading } = useSelector(selectPost);
	const { posts } = useSelector(selectPosts);
	const { selectedPost } = useSelector(selectPosts);
	let currentPost = posts.find((post) => post.id === selectedPost);
	const subreddit = currentPost?.subreddit;

	useEffect(() => {
		if (subreddit) {
			dispatch(fetchPost({ subreddit, selectedPost }));
		}
	}, [dispatch, subreddit, selectedPost]);

	return (
		<div className='preview tile'>
			<Media post={currentPost} />
			<h2 className='title'>{isLoading ? 'Loading...' : currentPost?.title}</h2>
			<p className='subtext'>{isLoading ? 'Loading...' : currentPost?.selftext}</p>
			<Comments comments={post.comments} />
		</div>
	);
};

export default Preview;
