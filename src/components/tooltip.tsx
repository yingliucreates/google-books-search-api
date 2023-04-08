import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const ArrowTooltip = ({ content, children }) => {
	return (
		<Tooltip title={content} arrow>
			{children}
		</Tooltip>
	);
};

export default ArrowTooltip;
