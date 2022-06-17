import React, { FC } from 'react';
import { Tooltip } from 'antd';
import { TooltipPropsWithTitle, TooltipPropsWithOverlay } from 'antd/lib/tooltip/index';
interface WlyTooltipPropsWithTitle extends TooltipPropsWithTitle {
	wlyClassName?: string;
}
interface WlyTooltipPropsWithOverlay extends TooltipPropsWithOverlay {
	wlyClassName?: string;
}
type WlyTooltipProps = WlyTooltipPropsWithTitle | WlyTooltipPropsWithOverlay;
const WlyTooltip: FC<WlyTooltipProps> = (props) => {
	const { wlyClassName = '', ...wlyProps } = props;
	let overlayClassName = props?.overlayClassName ?? '';
	let concatClass = overlayClassName + (overlayClassName && wlyClassName ? ' ' : '') + wlyClassName;
	const resClassName = concatClass ? concatClass + ' wly-tooltip' : 'wly-tooltip';

	return <Tooltip {...wlyProps} overlayClassName={resClassName}></Tooltip>;
};

export { WlyTooltip };
