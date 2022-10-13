import Comment from '../comment/Comment';
import './Comments.css';

import { useSelector } from 'react-redux';
import { selectPost } from '../../features/post/PostSlice';

const Comments = ({ comments }) => {
	const { isLoading } = useSelector(selectPost);

	if (isLoading) return <span>Loading ...</span>;

	console.log(comments);

	return (
		<div className='comments'>
			{comments?.map((comment, i) =>
				comment.data.distinguished !== 'moderator' &&
				comment.data.body ? ( //currently hides 'show more comments'
					<Comment key={i} comment={comment} />
				) : (
					<></>
				)
			)}
		</div>
	);
};

export default Comments;
