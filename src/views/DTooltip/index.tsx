import React, { FC } from 'react';
import { WlyTooltip } from 'src/components';

const DTooltip: FC<any> = (props) => {
	return <WlyTooltip title={<div>Look ME !!!</div>}>Hover ME !!!!</WlyTooltip>;
};

export { DTooltip };
