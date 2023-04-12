import React, { useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';

const FormTypeAsYouSearch = ({ onChange, isLoading }) => {
	const [value, setValue] = useState('');

	// const debounce = (func, delay) => {
	// 	let timeoutId;

	// 	return (...args) => {
	// 		if (timeoutId) clearTimeout(timeoutId);
	// 		timeoutId = setTimeout(() => {
	// 			timeoutId = null;
	// 			func.apply(this, args);
	// 		}, delay);
	// 	};
	// };

	const handleChange = e => {
		setValue(e.target.value);
	};

	// const debounceChange = debounce(handleChange, 500);

	return (
		<Box sx={{ paddingBottom: '10px' }} onChange={() => onChange(value)}>
			<TextField
				id="standard-basic"
				data-testid="text-input"
				label="Type away and..."
				variant="standard"
				size="small"
				sx={{
					width: '100%',
					marginTop: '-8px'
				}}
				value={value}
				onChange={handleChange}
			/>

			{isLoading ? (
				<Typography>loading...</Typography>
			) : (
				<Typography color="rgba(0, 0, 0, 0)">dfdfd</Typography>
			)}
		</Box>
	);
};
export default FormTypeAsYouSearch;
