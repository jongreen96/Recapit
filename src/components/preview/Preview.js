import './Preview.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectPosts } from '../../features/posts/PostsSlice';
import { fetchPost } from '../../utils/Api';

const Preview = () => {
	  const dispatch = useDispatch();
	  const { posts, selectedPost } = useSelector(selectPosts);
	  const subreddit = posts.find((item) => item.id === selectedPost).subreddit;

	  useEffect(() => {
		const data = { subreddit, selectedPost };
		dispatch(fetchPost(data));
	  }, [posts, selectedPost, dispatch]);

	return (
		<section className='preview tile'>
			
		</section>
	);
};

export default Preview;
