import { useDispatch } from 'react-redux';
import { setSubreddit } from '../../features/subreddit/subredditSlice';

import './PopularSubreddits.css';
import logo from '../../images/recapit-logo.svg';

const subreddits = [
	'all',
	'askreddit',
	'aww',
	'pics',
	'damnthatsinteresting',
	'funny',
	'worldnews',
	'interestingasfuck',
	'mademesmile',
	'whitepeopletwitter',
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
