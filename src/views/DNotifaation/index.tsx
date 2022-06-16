import { wlyNotiFiction, WlyButton } from 'src/components';
import React from 'react';

const DNotiFiction = () => {
	return (
		<div className='dbutton'>
			open{'   '}
			<WlyButton
				onClick={() => {
					wlyNotiFiction.open({
						message: 'open'
					});
				}}>
				open
			</WlyButton>
			<div>
				<br />
			</div>
			error{'   '}
			<WlyButton
				onClick={() => {
					wlyNotiFiction.error({
						message: 'error'
					});
				}}>
				error
			</WlyButton>
			<div>
				<br />
			</div>
			success{'   '}
			<WlyButton
				onClick={() => {
					wlyNotiFiction.success({
						message: 'success'
					});
				}}>
				success
			</WlyButton>
			<div>
				<br />
			</div>
			warning{'   '}
			<WlyButton
				onClick={() => {
					wlyNotiFiction.warning({
						message: 'warning'
					});
				}}>
				warning
			</WlyButton>
			<div>
				<br />
			</div>
			info{'   '}
			<WlyButton
				onClick={() => {
					wlyNotiFiction.info({
						message: 'info'
					});
				}}>
				info
			</WlyButton>
		</div>
	);
};

export default DNotiFiction;
