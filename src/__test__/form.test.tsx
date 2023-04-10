import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/form';

test('input box', async () => {
	const handleSubmit = jest.fn();
	const isLoading = false;
	render(<Form onSubmit={handleSubmit} isLoading={isLoading} />);
	const inputText = screen.getByLabelText(
		'Type your query and...'
	) as HTMLInputElement;
	await userEvent.type(inputText, 'test');

	expect(inputText.value).toBe('test');
});
