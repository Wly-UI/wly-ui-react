import { TabsProps } from 'antd';
export declare interface WlyTabsProps extends TabsProps {
	wlyClassName?: string;
}
declare function WlyTabs({
	type,
	className,
	size: propSize,
	onEdit,
	hideAdd,
	centered,
	addIcon,
	...props
}: WlyTabsProps): JSX.Element;
declare namespace WlyTabs {
	var WlyTabPane: typeof import('rc-tabs').TabPane;
}
export default WlyTabs;
