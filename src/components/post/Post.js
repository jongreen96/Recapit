import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPost, selectPosts } from '../../features/posts/PostsSlice';

import './Post.css';
import logo from '../../images/recapit-logo.svg';
import { formatNumber } from '../../utils/numbers';

const Post = ({ data }) => {
	const dispatch = useDispatch();
	const { selectedPost } = useSelector(selectPosts);
	return (
		<div
			className='post tile'
			onClick={() => dispatch(setSelectedPost(data.id))}
			style={
				selectedPost === data.id
					? {
							backgroundColor: '#f5f5f5',
							color: '#0099cc',
							outline: '2px solid #0099cc',
					  }
					: null
			}
		>
			<h4 className='post-title'>{data.title}</h4>
			<div className='flex-container'>
				<div className='post-stats'>
					<p>{formatNumber(data.score)}</p>
					<p>{formatNumber(data.num_comments)}</p>
					<p>Share</p>
				</div>
				<div className='post-thumbnail'>
					<img
						src={
							data.thumbnail !== 'default' &&
							data.thumbnail !== 'image' &&
							data.thumbnail !== 'self' &&
							data.thumbnail !== 'nsfw' &&
							data.thumbnail !== 'spoiler' &&
							data.thumbnail !== ''
								? data.thumbnail
								: logo
						}
						alt='thumbnail'
					/>
				</div>
			</div>
		</div>
	);
};

export default Post;
