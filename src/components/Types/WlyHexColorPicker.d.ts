import { ColorPickerBaseProps } from 'react-colorful/dist/types';
export declare interface WlyHexColorPickerProps extends ColorPickerBaseProps<string> {
	defaultColor?: string;
}
declare const WlyHexColorPicker: React.ForwardRefExoticComponent<
	WlyHexColorPickerProps & React.RefAttributes<unknown>
>;
export default WlyHexColorPicker;
