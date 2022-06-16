import { TableProps } from 'antd';
import RcTable, { Summary } from 'rc-table';
import { SELECTION_COLUMN } from 'antd/lib/table/hooks/useSelection';
import Column from 'antd/lib/table/Column';
import ColumnGroup from 'antd/lib/table/ColumnGroup';

export declare interface WlyTableProps<T> extends TableProps<T> {
	wlyClassName?: string;
}
declare const ForwardTable: <RecordType extends object = any>(
	props: WlyTableProps<RecordType> & {
		children?: React.ReactNode;
	} & {
		ref?: React.Ref<HTMLDivElement> | undefined;
	}
) => React.ReactElement;
declare type InternalTableType = typeof ForwardTable;
interface TableInterface extends InternalTableType {
	defaultProps?: Partial<WlyTableProps<any>>;
	SELECTION_COLUMN: typeof SELECTION_COLUMN;
	EXPAND_COLUMN: typeof RcTable.EXPAND_COLUMN;
	SELECTION_ALL: 'SELECT_ALL';
	SELECTION_INVERT: 'SELECT_INVERT';
	SELECTION_NONE: 'SELECT_NONE';
	Column: typeof Column;
	ColumnGroup: typeof ColumnGroup;
	Summary: typeof Summary;
}
declare const WlyTable: TableInterface;
export default WlyTable;
