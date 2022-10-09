import logo from '../../images/recapit-logo.svg';
import './Header.css';
import Search from '../search/Search';
import Time from '../time/Time';

const Header = () => {
	return (
		<div className='header tile'>
			<div className='flex-container'>
				<img src={logo} alt='Logo' className='header-logo' />
				<h1>
					<span className='blue'>Re</span>cap
					<span className='blue'>it</span>
				</h1>
			</div>
			<Time />
			<Search />
		</div>
	);
};

export default Header;
