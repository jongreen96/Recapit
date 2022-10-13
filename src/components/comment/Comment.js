import logo from '../../images/recapit-logo.svg';
import Comments from '../comments/Comments';
import { useState } from 'react';

const Comment = ({ comment }) => {
	const [showReplies, setShowReplies] = useState(false);

	const toggleReplies = () => {
		setShowReplies(!showReplies);
	};

	return (
		<div className='comment'>
			<div className='comment-body' onClick={() => toggleReplies()}>
				<img src={logo} alt={comment.author} />
				<p>{comment.data.body}</p>
			</div>
			{comment.data.replies && showReplies && (
				<Comments comments={comment.data.replies.data.children} />
			)}
		</div>
	);
};

export default Comment;
