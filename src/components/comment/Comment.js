import logo from '../../images/recapit-logo.svg';
import reply from '../../images/reply-icon.svg';
import upvote from '../../images/upvote-icon.svg';
import Comments from '../comments/Comments';
import { formatNumber } from '../../utils/numbers';
import { useState } from 'react';

const Comment = ({ comment }) => {
	const [showReplies, setShowReplies] = useState(false);

	const replies =
		comment.data.replies !== ''
			? comment.data.replies.data.children.length - 1
			: 0;

	const toggleReplies = () => {
		if (replies !== 0) setShowReplies(!showReplies);
	};

	return (
		<div className='comment'>
			<div className='comment-body' onClick={() => toggleReplies()}>
				<div>
					<img src={logo} alt={comment.author} />
					<div className='comment-score'>
						<img src={upvote} alt='upvote' />
						<h5>{formatNumber(comment.data.score)}</h5>
					</div>
					<div>
						<h6>{comment.data.author}</h6>
						<p className='comment-data'>{comment.data.body}</p>
					</div>
				</div>
				{replies !== 0 && (
					<div className='replies'>
						<img src={reply} alt='reply' />
						<h5>{replies}</h5>
					</div>
				)}
			</div>
			{comment.data.replies && showReplies && (
				<Comments comments={comment.data.replies.data.children} />
			)}
		</div>
	);
};

export default Comment;
