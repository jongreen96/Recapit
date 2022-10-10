import React from 'react';

import PopularSubreddits from './components/popularSubreddits/PopularSubreddits';
import Sidebar from './components/sidebar/Sidebar';
import Preview from './components/preview/Preview';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import './App.css';

function App() {
	return (
		<div className='App grid-container'>
			<div className='container'>
				<Header />
				<Sidebar />
				<PopularSubreddits />
				<Posts />
				<Preview />
			</div>
		</div>
	);
}

export default App;
