import React, { FC, useState } from 'react';
import { WlyButton, WlyModal } from 'src/components';
const DModal: FC<any> = (props) => {
	const [visible, setVisible] = useState(true);
	const handelClick = () => {
		setVisible(true);
	};
	return (
		<div className='modal'>
			<WlyButton onClick={handelClick}>点击展示</WlyButton>
			<WlyModal
				title='modal'
				visible={visible}
				onCancel={() => {
					setVisible(false);
				}}
				onOk={(e) => {
					console.log(e);
				}}>
				Modal
			</WlyModal>
		</div>
	);
};

export { DModal };
