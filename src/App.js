import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
	return (
		<div className='App grid-container'>
      <Header />
      <Sidebar />
		</div>
	);
}

export default App;
