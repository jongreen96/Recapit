import './Post.css';
import logo from '../../images/recapit-logo.svg';

const Post = ({ data }) => {
	return (
		<div className='post tile'>
			<h4 className='post-title'>{data.title}</h4>
			<div className='flex-container'>
				<div className='post-stats'>
					<p>{data.score}</p>
					<p>{data.num_comments}</p>
					<p>Share</p>
				</div>
				<div className='post-thumbnail'>
					<img
						src={
							data.thumbnail !== 'default' &&
							data.thumbnail !== 'self'
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
