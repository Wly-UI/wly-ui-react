import { WlyButton, WlyForm, WlyFormItem, WlyInput } from 'src/components';
import React from 'react';
import './index.less';
import { Form } from 'antd';
const DForm = () => {
	const [form] = Form.useForm();

	return (
		<div className='dform'>
			<WlyForm form={form}>
				<WlyFormItem label={'username'} name='userName'>
					<WlyInput />
				</WlyFormItem>
				<WlyFormItem label={'required'} name='required' rules={[{ required: true }]}>
					<WlyInput />
				</WlyFormItem>
			</WlyForm>
			<WlyButton
				onClick={() => {
					form.validateFields();
					console.log(form.getFieldsValue());
				}}>
				submit
			</WlyButton>
		</div>
	);
};

export default DForm;
