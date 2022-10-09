import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, setQuery } from '../../features/search/searchSlice';
import { setSubreddit } from '../../features/subreddit/subredditSlice';
import { performSearch } from '../../utils/Api';
import { formatNumber } from '../../utils/numbers';
import './Search.css';

const Search = () => {
	const dispatch = useDispatch();
	const { query, searchResults } = useSelector(selectSearch);

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
			{searchResults.length !== 0 && (
				<div className='search-results tile'>
					{searchResults.map((subreddit) => (
						<div
							key={subreddit.id}
							className='search-result'
							onClick={() => {
								dispatch(setSubreddit(subreddit.display_name));
								dispatch(setQuery(''));
							}}
						>
							<h3>{subreddit.display_name_prefixed}</h3>
							<p>{formatNumber(subreddit.subscribers)} Members</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
