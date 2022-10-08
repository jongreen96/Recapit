import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, setQuery } from '../../features/search/searchSlice';
import { performSearch } from '../../utils/Api';

const Search = () => {
	const dispatch = useDispatch();
	const { query } = useSelector(selectSearch);

	useEffect(() => {
		dispatch(performSearch(query));
	}, [dispatch, query]);

	return (
		<div className='flex-container'>
			<p className='text'>Subreddit Search: </p>
			<input
				type='text'
				placeholder='Search...'
				className='blue'
				value={query}
				onChange={(e) => dispatch(setQuery(e.target.value))}
			/>
		</div>
	);
};

export default Search;
