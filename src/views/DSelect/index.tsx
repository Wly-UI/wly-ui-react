import React, { FC, useState } from 'react';
import { WlyForm, WlyFormItem, WlySelect, WlyButton } from 'src/components';
// import { WlyButton } from 'src/components/Types';
const Dselect: FC<any> = (props) => {
	const { Option } = WlySelect;
	const [value, setValue] = useState([1, 2]);
	return (
		<>
			<WlyForm {...{ labelCol: { xs: { span: 3 } }, wrapperCol: { xs: { span: 17 } } }}>
				<WlyFormItem label='select' name='select'>
					<WlySelect mode='multiple' value={value} allowClear>
						<Option value={1} key={1}>
							1
						</Option>
						<Option value={2} key={2}>
							2
						</Option>
						<Option value={3} key={3}>
							3
						</Option>
					</WlySelect>
				</WlyFormItem>
			</WlyForm>
			<WlyButton
				onClick={() => {
					console.log(value);
				}}>
				value
			</WlyButton>
		</>
	);
};

export { Dselect };
