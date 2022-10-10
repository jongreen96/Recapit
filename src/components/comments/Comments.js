import Comment from '../comment/Comment';
import './Comments.css';

const Comments = ({ comments }) => {
    if (!comments) {
        return <span>Loading ...</span>;
    }
	return <div className='comments'>
        {comments?.map((comment, i) => (
            <Comment key={i} comment={comment} />
        ))}
    </div>;
};

export default Comments;
