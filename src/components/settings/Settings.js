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
					<div onClick={() => dispatch(setDarkmode()) }>
						<h4>Darkmode</h4>
						<img src={darkmode ? toggleOn : toggleOff} alt='Toggle' />
					</div>
				</div>
			)}
		</>
	);
};

export default Settings;
