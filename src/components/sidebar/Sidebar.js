import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar tile'>
			<div className='no-wrap'>
			<h2 className='text'>
				Current Subreddit: 
			</h2>
			<h2>
				<strong>
					r/<span className='blue'>Formula1</span>
				</strong>
			</h2>
			</div>
			<p className='description'>
				The best independent Formula 1 community anywhere. News, stories
				and discussion from and about the world of Formula 1.
			</p>
            <div className='stats flex-container'>
                <div>
                    <h3 className='blue'><strong>6.9m</strong></h3>
                    <p>Members</p>
                </div>
                <div>
                    <h3 className='blue'><strong>42.0k</strong></h3>
                    <p>Online</p>
                </div>
            </div>
		</div>
	);
};

export default Sidebar;
