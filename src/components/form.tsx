import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Form = ({ onSubmit, isLoading }) => {
	const [value, setValue] = useState('');
	// const debounce = (func, delay) => {
	// 	let timeoutId;
	// 	return (...args) => {
	// 		clearTimeout(timeoutId);
	// 		timeoutId = setTimeout(() => {
	// 			func.apply(this, args);
	// 		}, delay);
	// 	};
	// };

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
		setValue('');
	};

	return (
		// <FormControl sx={{ width: '100%' }} onSubmit={debounce(handleSubmit, 300)}>
		<Box sx={{ paddingBottom: '40px' }}>
			<form onSubmit={handleSubmit}>
				<TextField
					id="standard-basic"
					label="Type in Your Keywords and..."
					variant="standard"
					size="small"
					sx={{
						width: '50%',
						marginTop: '-8px'
					}}
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
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
