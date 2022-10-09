import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import PopularSubreddits from './components/popularSubreddits/PopularSubreddits';
import Preview from './components/preview/Preview';
import Posts from './components/posts/Posts';
import './App.css';

function App() {
	return (
		<div className='App grid-container'>
			<div className='container'>
				<Header />
				<Sidebar />
				<PopularSubreddits />
				<Preview />
				<Posts />
			</div>
		</div>
	);
}

export default App;
