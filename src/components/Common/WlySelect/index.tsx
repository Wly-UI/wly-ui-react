import React, { FC } from 'react';
import { SelectProps, Select } from 'antd';
import './index.less';
interface WlySelectProps extends SelectProps {
	wlyClassName?: string;
}

const WlySelect = (props: WlySelectProps) => {
	const { wlyClassName = '', ...wlyProps } = props;
	let className = props?.className ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-select' : 'wly-select';
	const dropdownClassName = props.dropdownClassName + ' wly-select-drop';
	return (
		<Select
			{...wlyProps}
			value={props.value}
			className={resClassName}
			dropdownClassName={dropdownClassName}></Select>
	);
};
WlySelect.Option = Select.Option;
const WlySelectOption = Select.Option;
export { WlySelect, WlySelectOption };
