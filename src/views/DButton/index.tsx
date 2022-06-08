import { WlyButton } from 'src/components';
import React from 'react';

const DButton = () => {
	return (
		<div className='dbutton'>
			default{'   '}
			<WlyButton
				onClick={() => {
					console.log('click');
				}}>
				ButtonTest
			</WlyButton>
			<div>
				<br />
			</div>
			primary{'   '}
			<WlyButton
				type='primary'
				onClick={() => {
					console.log('click');
				}}>
				ButtonTest
			</WlyButton>
		</div>
	);
};

export default DButton;
