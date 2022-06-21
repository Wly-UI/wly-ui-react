import type { SelectProps, BaseSelectRef, OptGroup, Option } from 'rc-select';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
export declare interface WlySelectProps<ValueType, OptionType>
	extends SelectProps<ValueType, OptionType> {
	wlyClassName?: string;
}
declare const WlySelect: (<
	ValueType = any,
	OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(
	props: WlySelectProps<ValueType, OptionType> & {
		children?: React.ReactNode;
	} & {
		ref?: React.Ref<BaseSelectRef> | undefined;
	}
) => React.ReactElement) & {
	SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
	Option: typeof Option;
	OptGroup: typeof OptGroup;
};
export default WlySelect;
