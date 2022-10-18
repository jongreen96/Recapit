import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPost, selectPosts } from '../../features/posts/PostsSlice';

import './Post.css';
import logo from '../../images/recapit-logo.svg';
import upvote from '../../images/upvote-icon.svg';
import comment from '../../images/comment-icon.svg';
import share from '../../images/share-icon.svg';
import { formatNumber } from '../../utils/numbers';

const Post = ({ data }) => {
	const dispatch = useDispatch();
	const { selectedPost } = useSelector(selectPosts);
	const darkmode = useSelector((state) => state.theme.darkmode);

	const handleShareClick = () => {
		navigator.clipboard.writeText(data.url);
		alert('Link copied to clipboard!');
	};

	return (
		<div
			className='post tile'
			onClick={() => {
				dispatch(setSelectedPost(data.id))
				document.querySelector('.preview').classList.toggle('preview-active');
			}}
			style={
				selectedPost === data.id
					? {
							backgroundColor: darkmode ? '#0b0e11' : '#f5f5f5',
							color: '#0099cc',
							outline: '2px solid #0099cc',
					  }
					: null
			}
		>
			<h3 className='post-title'>{data.title}</h3>
			<div className='flex-container'>
				<div className='post-stats'>
					<div className='post-stat'>
						<img src={upvote} alt='upvote' />
						<p>{formatNumber(data.score)}</p>
					</div>
					<div className='post-stat'>
						<img src={comment} alt='comment' />
						<p>{formatNumber(data.num_comments)}</p>
					</div>
					<div className='post-stat share' onClick={handleShareClick}>
						<img src={share} alt='share' />
						<p>Share</p>
					</div>
					<h6>{`r/${data.subreddit}`}</h6>
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
