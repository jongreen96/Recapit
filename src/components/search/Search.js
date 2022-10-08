import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../features/search/searchSlice';

const Search = () => {
	const dispatch = useDispatch();
	const { query } = useSelector(selectSearch); //TODO

	return (
		<div className='flex-container'>
			<p className='text'>Subreddit Search: </p>
			<input type='text' placeholder='Search...' className='blue' />
		</div>
	);
};

export default Search;
