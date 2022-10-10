import logo from '../../images/recapit-logo.svg';

const Comment = ({ comment }) => {
	return <div className='comment'>
        <img src={logo} alt={comment.author} />
        <p>{comment.data.body}</p>
    </div>;
};

export default Comment;
