import Comment from '../comment/Comment';
import LoadingComments from './LoadingComments';
import './Comments.css';
import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux';
import { selectPost } from '../../features/post/PostSlice';

const Comments = ({ comments }) => {
	const { isLoading } = useSelector(selectPost);

	if (isLoading) return <LoadingComments />;

	return (
		<div className='comments'>
			{comments?.map(
				(comment) =>
					comment.data.distinguished !== 'moderator' &&
					comment.data.body && ( //currently hides 'show more comments'
						<Comment key={uuidv4()} comment={comment} />
					)
			)}
		</div>
	);
};

export default Comments;
