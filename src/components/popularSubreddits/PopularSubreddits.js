import { useDispatch } from 'react-redux';
import { setSubreddit } from '../../features/subreddit/subredditSlice';

import './PopularSubreddits.css';
import logo from '../../images/recapit-logo.svg';

const subreddits = [
	'formula1',
	'aww',
	'askreddit',
	'funny',
	'gaming',
	'movies',
	'news',
	'pics',
	'science',
	'sports',
];

const PopularSubreddits = () => {
	const dispatch = useDispatch();

	return (
		<div className='popular-subreddits tile'>
			<h2>Popular Subreddits:</h2>
			<ul>
				{subreddits.map((subreddit, index) => (
					<li key={index}
					onClick={() => dispatch(setSubreddit(subreddit))}
					>
						<img src={logo} alt='subreddit icon' />
						<h3>r/{subreddit}</h3>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularSubreddits;
