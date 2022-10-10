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
	const { post, isLoading, isError } = useSelector(selectPost);
	const { posts } = useSelector(selectPosts);
	const { selectedPost } = useSelector(selectPosts);
	let currentPost = posts.find((post) => post.id === selectedPost);

	return (
		<div className='preview tile'>
			<h2>{currentPost.title}</h2>
		</div>
	)
};

export default Preview;
