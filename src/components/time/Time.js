import { useDispatch } from 'react-redux';
import { setTime } from '../../features/posts/PostsSlice';

const Time = () => {
	const dispatch = useDispatch();
	return (
		<div className='flex-container'>
			<p className='text'> Recap time: </p>
			<select
				className='blue'
				onChange={(e) => dispatch(setTime(e.target.value))}
			>
				<option value='day'>Day</option>
				<option value='week'>Week</option>
				<option value='month'>Month</option>
				<option value='year'>Year</option>
				<option value='all'>All Time</option>
			</select>
		</div>
	);
};

export default Time;
