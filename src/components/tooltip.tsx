import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		maxWidth: 600,
		backgroundColor: 'rgba(0, 0, 0, 0.87)',
		color: 'white',
		fontSize: '20px'
	}
});

const BoxTooltip = ({ content, children }) => {
	return (
		<CustomWidthTooltip title={content} placement="bottom-end">
			{children}
		</CustomWidthTooltip>
	);
};

export default BoxTooltip;
