import './Posts.css';
import { data } from '../../data/DummyData';
import Post from '../post/Post';

const Posts = () => {
	return (
		<div className='posts'>
			{data.map((post) => {
				return <Post data={post} />;
			})}
		</div>
	);
};

export default Posts;
