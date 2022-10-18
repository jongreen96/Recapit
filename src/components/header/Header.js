import logo from '../../images/recapit-logo.svg';
import './Header.css';
import Search from '../search/Search';
import Time from '../time/Time';
import Settings from '../settings/Settings';

const Header = () => {
	return (
		<div className='header tile'>
			<div className='flex-container'>
				<img src={logo} alt='Logo' className='header-logo' />
				<h1>
					<span className='blue'>Re</span>cap
					<span className='blue'>it</span>
				</h1>
				<Settings />
			</div>
			<Time />
			<Search />
		</div>
	);
};

export default Header;
