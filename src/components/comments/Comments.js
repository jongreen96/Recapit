import Comment from '../comment/Comment';
import './Comments.css';

import { useSelector } from 'react-redux';
import { selectPost } from '../../features/post/PostSlice';

const Comments = ({ comments }) => {
    const { isLoading } = useSelector(selectPost);

	if (isLoading) return <span>Loading ...</span>;
    
	return (
		<div className='comments'>
			{comments?.map((comment, i) =>
				comment.data.distinguished !== 'moderator' ? (
					<Comment key={i} comment={comment} />
				) : null
			)}
		</div>
	);
};

export default Comments;
