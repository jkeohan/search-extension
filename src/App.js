import React, { useEffect } from 'react';
import './App.css';
import * as SDK from 'dc-extensions-sdk';

function App() {

	useEffect(() => {
		const initialize = async () => {

			const sdk = await SDK.init();
      console.log(SDK);
		};
		initialize();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
					Extensions Testing
			</header>
		</div>
	);
}

export default App;
