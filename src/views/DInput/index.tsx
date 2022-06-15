import { WlyInput } from 'src/components';
import React from 'react';
import './index.less';
const DInput = () => {
	return (
		<div className='dinput'>
			<div className='input-contain'>
				<div>
					<br />
				</div>
				default{'   '}
				<WlyInput
					onClick={() => {
						console.log('click');
					}}
				/>
			</div>
			<div className='input-contain'>
				<div>
					<br />
				</div>
				number{'   '}
				<WlyInput
					type='number'
					onClick={() => {
						console.log('click');
					}}
				/>
			</div>
			<div className='input-contain'>
				<div>
					<br />
				</div>
				password{'   '}
				<WlyInput
					type='password'
					onClick={() => {
						console.log('click');
					}}
				/>
			</div>
			<div className='input-contain'>
				<div>
					<br />
				</div>
				prefix{'   '}
				<WlyInput
					addonBefore={'prefix'}
					onClick={() => {
						console.log('click');
					}}
				/>
			</div>
		</div>
	);
};

export default DInput;
