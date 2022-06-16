import React, { FC } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd';
import './index.less';
interface WlyInputProps extends InputProps {
	wlyClassName?: string;
}
const WlyInput: FC<WlyInputProps> = (props) => {
	const wlyProps = { ...props };
	delete wlyProps.wlyClassName;
	let className = props?.className ?? '';
	let wlyClassName = props?.wlyClassName ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-input' : 'wly-input';

	return <Input {...wlyProps} className={resClassName}></Input>;
};
export { WlyInput };
