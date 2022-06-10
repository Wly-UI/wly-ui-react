import React, { FC, ReactNode } from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd';
import './index.less';
interface WlyFormProps extends FormProps {
	wlyClassName?: string;
	// children?: ReactNode;
}
const WlyForm: FC<WlyFormProps> = (props) => {
	const wlyProps = { ...props };
	delete wlyProps.wlyClassName;
	let className = props?.className ?? '';
	let wlyClassName = props?.wlyClassName ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-form' : 'wly-form';

	return <Form {...wlyProps} className={resClassName}></Form>;
};
export { WlyForm };
