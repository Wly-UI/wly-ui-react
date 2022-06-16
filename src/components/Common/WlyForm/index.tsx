import React, { ReactNode } from 'react';
import { Form, FormProps } from 'antd';
import { FormInstance } from 'antd';
import './index.less';

interface WlyFormProps extends FormProps {
	wlyClassName?: string;
	children?: ReactNode;
	useForm?: FormInstance<any>;
}
const WlyForm = (props: WlyFormProps) => {
	const { useForm = undefined, className = '', ...wlyProps } = { ...props };
	delete wlyProps.wlyClassName;
	let wlyClassName = props?.wlyClassName ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-form' : 'wly-form';
	return <Form {...wlyProps} className={resClassName}></Form>;
};
WlyForm.useForm = Form.useForm;
const WlyFormItem = Form.Item;

export { WlyForm, WlyFormItem };
