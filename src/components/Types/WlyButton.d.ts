import { ButtonProps } from 'antd';
import Group from 'antd/lib/button/button-group';

export declare interface WlyButtonProps extends ButtonProps {
	wlyClassName?: string;
}
interface CompoundedComponent
	extends React.ForwardRefExoticComponent<WlyButtonProps & React.RefAttributes<HTMLElement>> {
	Group: typeof Group;
	__ANT_BUTTON: boolean;
}
// export declare const WlyButton: WlyButtonProps;
declare const WlyButton: CompoundedComponent;
export default WlyButton;
