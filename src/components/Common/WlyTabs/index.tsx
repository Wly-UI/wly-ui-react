import { Tabs } from 'antd';
import React from 'react';
import { TabsProps } from 'antd/lib/tabs';
import './index.less';
declare interface WlyTabsProps extends TabsProps {
	wlyClassName?: string;
}
const WlyTabs = (props: WlyTabsProps) => {
	const { wlyClassName = '', ...wlyProps } = props;
	let className = props?.className ?? '';
	let concatClass = className + (className && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-tabs' : 'wly-tabs';
	return <Tabs {...wlyProps} className={resClassName}></Tabs>;
};
const WlyTabPane = Tabs.TabPane;
WlyTabs.WlyTabPane = WlyTabPane;
export { WlyTabs, WlyTabPane };
