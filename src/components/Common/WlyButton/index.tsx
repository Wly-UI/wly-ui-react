import React, { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd';
import './index.less';
interface WlyButtonProps extends ButtonProps {
	wlyClassName?: string;
}
const WlyButton: FC<WlyButtonProps> = (props) => {
	const wlyProps = { ...props };
	delete wlyProps.wlyClassName;
	let className = props?.className ?? '';
	let wlyClassName = props?.wlyClassName ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-button' : 'wly-button';

	return <Button {...wlyProps} className={resClassName}></Button>;
};
export { WlyButton };
