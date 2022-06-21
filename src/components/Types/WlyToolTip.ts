import { TooltipPropsWithTitle, TooltipPropsWithOverlay } from 'antd/lib/tooltip/index';
export declare interface WlyTooltipPropsWithTitle extends TooltipPropsWithTitle {
	wlyClassName?: string;
}
export declare interface WlyTooltipPropsWithOverlay extends TooltipPropsWithOverlay {
	wlyClassName?: string;
}
export declare type WlyTooltipProps = WlyTooltipPropsWithTitle | WlyTooltipPropsWithOverlay;

declare const WlyTooltip: React.ForwardRefExoticComponent<
	WlyTooltipProps & React.RefAttributes<unknown>
>;

export default WlyTooltip;
