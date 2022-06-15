import { WlyTabs, WlyTabPane } from 'src/components';
import React from 'react';
import './index.less';
const DTabs = () => {
	const onChange = (key: string) => {
		console.log(key);
	};
	return (
		<div className='dtabs'>
			<WlyTabs defaultActiveKey='1' onChange={onChange}>
				<WlyTabPane tab='Tab 1' key='1'>
					1
				</WlyTabPane>
				<WlyTabPane tab='Tab 2' key='2'>
					2
				</WlyTabPane>
				<WlyTabPane tab='Tab 3' key='3'>
					3
				</WlyTabPane>
			</WlyTabs>
		</div>
	);
};

export default DTabs;
