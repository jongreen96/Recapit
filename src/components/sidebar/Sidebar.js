import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar tile'>
			<h2>
				Current Subreddit: <br />
				<strong>
					r/<span className='blue'>Formula1</span>
				</strong>
			</h2>
			<p>
				The best independent Formula 1 community anywhere. News, stories
				and discussion from and about the world of Formula 1.
			</p>
            <div className='stats flex-container'>
                <div>
                    <h3 className='blue'><strong>6.6m</strong></h3>
                    <p>Members</p>
                </div>
                <div>
                    <h3 className='blue'><strong>14.0k</strong></h3>
                    <p>Online Now</p>
                </div>
            </div>
		</div>
	);
};

export default Sidebar;
