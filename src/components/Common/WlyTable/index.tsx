import { Table, TableProps } from 'antd';
import React, { FC } from 'react';
import './index.less';

interface WlyTableProps<T> extends TableProps<T> {
	wlyClassName?: string;
}
const WlyTable: FC<WlyTableProps<any>> = (props) => {
	const { wlyClassName = '', ...wlyProps } = props;
	let className = props?.className ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-table' : 'wly-table';
	return <Table {...wlyProps} className={resClassName} />;
};

export { WlyTable };
