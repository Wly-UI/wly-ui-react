import React, { FC, useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { ColorPickerBaseProps, RgbaColor } from 'react-colorful/dist/types';
import { WlyInput } from '../WlyInput';
import { WlyTooltip } from '../WlyToolTip';
import { colord } from 'colord';
import './index.less';
interface WlyHexColorPicker extends ColorPickerBaseProps<string> {
	defaultColor?: string;
}

const WlyHexColorPicker: FC<WlyHexColorPicker> = (props) => {
	let { defaultColor, ...colorPickerBaseProps } = props;
	defaultColor = defaultColor ?? '#ffffff';
	const [visible, setVisible] = useState(false);
	const [focused, setFocused] = useState(false);

	const handelChange: (newColor: RgbaColor) => void = (color) => {
		props.onChange(colord(color).toHex());
	};
	const inputValueChange = (e: any) => {
		if (/^[0-9A-F]{0,8}$/i.test(e.target.value)) {
			props.onChange('#' + e.target.value);
		}
	};
	const inputFouce = (e: any) => {
		setFocused(true);
	};
	const inputBlur = (e: any) => {
		setFocused(false);
		if (e.target.value.length === 7) {
			props.onChange('#' + e.target.value + e.target.value[6]);
		}
		if (e.target.value.length === 0) {
			props.onChange(defaultColor as string);
		}
	};
	const date = Number(new Date());
	const ColorPicker = (
		<div className={'wly-HexColorPicker'}>
			<RgbaColorPicker
				{...colorPickerBaseProps}
				color={colord(props.color ? props.color : defaultColor).toRgb()}
				onChange={handelChange}
			/>
		</div>
	);

	const sameWithFont =
		'Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono';
	return (
		<WlyTooltip
			getPopupContainer={(node) => {
				return node;
			}}
			visible={visible}
			title={ColorPicker}
			overlayClassName={'colorPicker-tooltip ' + date}
			onVisibleChange={(vs) => {
				if (focused) {
					setVisible(true);
				} else {
					setVisible(vs);
				}
			}}>
			<div className='wly-color-content' style={{ display: 'inline-block' }}>
				<WlyInput
					value={(props.color ? props.color : defaultColor).slice(1)}
					onChange={inputValueChange}
					onBlur={inputBlur}
					onFocus={inputFouce}
					addonBefore='#'
					addonAfter={
						<div
							className='wly-color'
							style={{
								width: 16,
								height: 16,
								background: props.color,
								display: 'inline-block'
							}}></div>
					}
				/>
			</div>
		</WlyTooltip>
	);
};

export { WlyHexColorPicker };
