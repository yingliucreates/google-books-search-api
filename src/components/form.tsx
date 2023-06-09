import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Form = ({ onSubmit, isLoading }) => {
	const [value, setValue] = useState('');
	// const [isThrottle, setIsThrottle] = useState(false);
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

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
		setValue('');
	};

	const handleChange = e => {
		setValue(e.target.value);
	};

	// const debounceChange = debounce(handleChange, 500);

	return (
		// <FormControl sx={{ width: '100%' }} onSubmit={debounce(handleSubmit, 300)}>
		<Box sx={{ paddingBottom: '40px' }}>
			<form onSubmit={handleSubmit}>
				<TextField
					id="standard-basic"
					data-testid="text-input"
					label="Type away and..."
					variant="standard"
					size="small"
					sx={{
						width: '50%',
						marginTop: '-8px'
					}}
					value={value}
					onChange={handleChange}
				/>

				{isLoading ? (
					<LoadingButton
						loading
						variant="outlined"
						size="large"
						sx={{ width: '50%' }}
					>
						Submit
					</LoadingButton>
				) : (
					<Button
						type="submit"
						variant="outlined"
						size="medium"
						sx={{ width: '50%' }}
					>
						search
					</Button>
				)}

				{/* // </FormControl> */}
			</form>
		</Box>
	);
};
export default Form;
