import React from 'react';
import { wlyNotiFiction } from './components/index';
const App = () => {
	return (
		<div
			className='app'
			onClick={() => {
				wlyNotiFiction['error']({
					message: 'err',
					duration: null
				});
			}}>
			app
		</div>
	);
};
export default App;
