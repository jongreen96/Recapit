import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddit } from '../../features/subreddit/subredditSlice';
import { fetchSubreddit } from '../../utils/Api';
import { useEffect } from 'react';
import { formatNumber } from '../../utils/numbers';

const Sidebar = () => {
	const dispatch = useDispatch();
	const { subreddit, subredditInfo, isLoading, isError } =
		useSelector(selectSubreddit);

	useEffect(() => {
		dispatch(fetchSubreddit(subreddit));
	}, [subreddit, dispatch]);

	if (isLoading) return <div className='sidebar'>Loading...</div>;
	if (isError) return <div className='sidebar'>Error!</div>;

	return (
		<div className='sidebar tile'>
			<div className='no-wrap'>
				<h2 className='text'>Current Subreddit:</h2>
				<h2>
					<strong>
						r/<span className='blue'>{subredditInfo.display_name}</span>
					</strong>
				</h2>
			</div>
			<p className='description'>
				{subredditInfo.public_description}
			</p>
			<div className='stats flex-container'>
				<div>
					<h3 className='blue'>
						<strong>{formatNumber(subredditInfo.subscribers)}</strong>
					</h3>
					<p>Members</p>
				</div>
				<div>
					<h3 className='blue'>
						<strong>{formatNumber(subredditInfo.active_user_count)}</strong>
					</h3>
					<p>Online</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
