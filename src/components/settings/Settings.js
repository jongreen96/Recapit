import settings from '../../images/settings-icon.svg';
import toggleOff from '../../images/toggle-off-icon.svg';
import toggleOn from '../../images/toggle-on-icon.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkmode } from '../../features/theme/ThemeSlice';

const Settings = () => {
	const dispatch = useDispatch();
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};
	const darkmode = useSelector((state) => state.theme.darkmode);

	return (
		<>
			<img
				src={settings}
				alt='Settings'
				className='settings-icon settings'
				onClick={handleClick}
			/>
			{active && (
				<div className='settings-menu tile'>
					<div onClick={() => dispatch(setDarkmode())}>
						<h4>Darkmode</h4>
						<img
							src={darkmode ? toggleOn : toggleOff}
							alt='Toggle'
						/>
					</div>
					<div>
						<h3>Info</h3>
					</div>
					<div>
						<h5>
							Welcome to Recapit, a place to recap the goings on
							of reddit without getting drawn into the infinite
							scrolling or small posts that waste your time!
							<br />
							<br /> Simply select the recap time you desire,
							choose a subreddit to browse and see the most
							popular posts.
							<br />
							<br /> Click images to view fullscreen, click post
							titles to be taken to the reddit page/news article
							and click comments to view replies.
							<br />
							<br /> Enjoy! - Jon Green
						</h5>
					</div>
				</div>
			)}
		</>
	);
};

export default Settings;
