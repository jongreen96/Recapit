import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import PopularSubreddits from './components/popularSubreddits/PopularSubreddits';
import './App.css';

function App() {
	return (
		<div className='App grid-container'>
      <Header />
      <Sidebar />
      <PopularSubreddits />
		</div>
	);
}

export default App;
