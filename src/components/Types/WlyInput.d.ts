import { InputProps, InputRef } from 'antd';

export declare interface WlyInputProps extends InputProps {
	wlyClassName?: string;
}
declare const WlyInput: React.ForwardRefExoticComponent<
	WlyInputProps & React.RefAttributes<InputRef>
>;
export default WlyInput;
