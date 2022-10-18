import settings from '../../images/settings-icon.svg';
import { useDispatch } from 'react-redux';
import { setDarkmode } from '../../features/theme/ThemeSlice';

const Settings = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setDarkmode());
	};

	return (
		<img
			src={settings}
			alt='Settings'
			className='settings-icon'
			onClick={handleClick}
		/>
	);
};

export default Settings;
