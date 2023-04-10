import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/list';

// const lists =  [
//     [1, 'thumbnail-1.jpg', 'Book 1', 'Author 1', 'Category 1', 'Publisher 1'],
//     [2, 'thumbnail-2.jpg', 'Book 2', 'Author 2', 'Category 2', 'Publisher 2'],
//   ]
// ;

test('list', async () => {
	// const headers = [
	// 	'IMAGE',
	// 	'TITLE',
	// 	'AUTHOR(S)',
	// 	'CATEGORY',
	// 	'PUBLISHED DATE',
	// 	'PUBLISHER'
	// ];
	const data = [
		['Book 1', 'Author 1', 'Category 1', '2022-03-01', 'Publisher 1'],
		['Book 2', 'Author 2', 'Category 2', '2022-03-02', 'Publisher 2'],
		['Book 3', 'Author 3', 'Category 3', '2022-03-03', 'Publisher 3']
	];

	render(<List lists={data} />);

	const table = screen.getByTestId('table');
	const tableHead = screen.getByTestId('th');
	const tableBody = screen.getByTestId('tb');

	expect(table).toBeInTheDocument();
	expect(tableHead).toBeInTheDocument();
	expect(tableBody).toBeInTheDocument();

	// check headers
	// headers.forEach((header, index) => {
	// 	const cell = screen.getByRole('cell', { name: header });
	// 	expect(cell).toHaveTextContent(header);
	// 	// expect(cell).toHaveAttribute('align', columns[index].align);
	// });

	// check data
	// data.forEach((row, rowIndex) => {
	// 	row.forEach((cell, cellIndex) => {
	// 		const cell = screen.getByText(cell);
	// 		expect(cell).toBeInTheDocument();
	// 		// expect(cell.closest('tr')).toHaveAttribute('hover', true);
	// 		// expect(cell).toHaveAttribute('align', columns[cellIndex].align);
	// 	});
	// });
});
