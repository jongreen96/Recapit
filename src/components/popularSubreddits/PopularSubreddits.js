import './PopularSubreddits.css';
import logo from '../../images/recapit-logo.svg';

const subreddits = [
	'r/formula1',
	'r/aww',
	'r/askreddit',
	'r/funny',
	'r/gaming',
	'r/movies',
	'r/news',
	'r/pics',
	'r/science',
	'r/sports',
];

const PopularSubreddits = () => {
	return (
		<div className='popular-subreddits tile'>
			<h2>Popular Subreddits:</h2>
			<ul>
				{subreddits.map((subreddit, index) => (
					<li key={index}>
						<img src={logo} alt='subreddit icon' />
						<h3>{subreddit}</h3>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularSubreddits;
