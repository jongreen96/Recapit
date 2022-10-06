import './Posts.css';
import Post from '../post/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../features/subreddit/subredditSlice';

const Posts = () => {
	const posts = useSelector(selectPosts);

	return (
		<div className='posts'>
			{posts.map((post) => {
				return <Post data={post} />;
			})}
		</div>
	);
};

export default Posts;
