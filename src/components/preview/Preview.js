import './Preview.css';
import Media from '../media/Media';
import Comments from '../comments/Comments';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectPost } from '../../features/post/PostSlice';
import { selectPosts } from '../../features/posts/PostsSlice';
import { fetchPost } from '../../utils/Api';
import { setSubreddit } from '../../features/subreddit/subredditSlice';

const Preview = () => {
	const dispatch = useDispatch();
	const { post } = useSelector(selectPost);
	const { posts } = useSelector(selectPosts);
	const { selectedPost } = useSelector(selectPosts);
	let currentPost = posts.find((post) => post.id === selectedPost);
	const subreddit = currentPost?.subreddit;

	useEffect(() => {
		if (subreddit) {
			dispatch(fetchPost({ subreddit, selectedPost }));
		}
	}, [dispatch, subreddit, selectedPost]);

	const handleClick = () => {
		document.querySelector('.preview').classList.toggle('preview-active');
	};

	return (
		<div className='preview tile'>
			<p className='mobile-close' onClick={handleClick}>
				X
			</p>
			<Media post={currentPost} />
			<a href={currentPost?.url} target='_blank' rel='noreferrer'>
				<h2 className='title'>{currentPost?.title}</h2>
			</a>
			<div className='subtext'>
				<div className='post-info'>
					<h5>
						{currentPost && `Posted by u/${currentPost?.author}`}
					</h5>
					<h5
						onClick={() =>
							dispatch(setSubreddit(currentPost.subreddit))
						}
					>
						{currentPost && `r/${currentPost?.subreddit}`}
					</h5>
				</div>
				<p>{currentPost?.selftext}</p>
			</div>
			<Comments comments={post.comments} />
		</div>
	);
};

export default Preview;
