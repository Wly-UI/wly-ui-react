import React, { FC, useState } from 'react';
import { WlyButton, WlyHexColorPicker } from 'src/components';

const DPicker: FC<any> = (props) => {
	const defaultColor = '#bbffaa';
	const [color, setColor] = useState(defaultColor);
	const handelChange = (newColor: string) => {
		setColor(newColor);
	};
	return (
		<div style={{ marginLeft: 500 }}>
			<WlyHexColorPicker onChange={handelChange} color={color} defaultColor={defaultColor} />
		</div>
	);
};
export { DPicker };
