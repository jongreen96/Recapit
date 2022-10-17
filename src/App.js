import React, { useEffect } from 'react';

import PopularSubreddits from './components/popularSubreddits/PopularSubreddits';
import Sidebar from './components/sidebar/Sidebar';
import Preview from './components/preview/Preview';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const darkmode = useSelector((state) => state.theme.darkmode);

	useEffect(() => {
		document.body.classList.toggle('darkmode');
	}, [darkmode]);

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
