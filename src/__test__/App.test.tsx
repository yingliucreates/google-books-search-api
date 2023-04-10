import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title card', async () => {
	const view = render(<App />);
	const title = screen.getByTestId('typography-title');
	expect(title).toHaveTextContent('Google Books Search');
	view.unmount();
});

test('renders box container', async () => {
	const view = render(<App />);
	// const parent = screen.getByTestId('parent');
	const box = screen.getByTestId('app-container');
	expect(box).toHaveTextContent('Google Books Search');
	view.unmount();
});
