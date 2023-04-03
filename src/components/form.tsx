import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				onSubmit(value);
				setValue('');
			}}
		>
			<input value={value} onChange={e => setValue(e.target.value)}></input>
			<button type="submit">search</button>
		</form>
	);
};
export default Form;
