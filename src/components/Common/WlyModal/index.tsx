import React, { FC } from 'react';
import { Modal as MModal, ModalProps } from 'antd';

import './index.less';
import { WlyButton } from '../WlyButton';

interface WlyModalProps extends ModalProps {
	wlyClassName?: string;
}

const WlyModal: FC<WlyModalProps> = (props) => {
	const { wlyClassName = '', ...wlyProps } = props;
	let className = props?.className ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-modal' : 'wly-modal';
	const customFooter = () => {
		if (props.footer === true || props.footer === undefined)
			return (
				<div className='custom-footer'>
					<WlyButton onClick={props.onCancel} type='default'>
						Cancel
					</WlyButton>
					<WlyButton onClick={props.onOk} type='primary'>
						OK
					</WlyButton>
				</div>
			);
		return props.footer;
	};

	return <MModal {...wlyProps} className={resClassName} footer={customFooter()}></MModal>;
};

export { WlyModal };
