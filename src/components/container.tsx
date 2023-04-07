import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '../components/list';
import Form from '../components/form';

function Container() {
	const [list, setList] = useState([]);
	const [search, setSearch] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!search) return;
		setIsLoading(true);
		fetch(
			`https://books.googleapis.com/books/v1/volumes?q=${search}&maxResults=30&key=${process.env.REACT_APP_API_KEY}`,
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		)
			.then(res => {
				if (res.status > 299 && res.status < 200) throw new Error();
				return res.json();
			})
			.then(data => {
				console.log(data);
				setIsLoading(false);
				setList(
					data.items.map(item => [
						item.volumeInfo?.imageLinks?.smallThumbnail,
						item.volumeInfo?.title,
						item.volumeInfo?.authors,
						item.volumeInfo?.categories?.[0],
						item.saleInfo?.country,
						item.searchInfo?.textSnippet
					])
				);
			});
	}, [search]);

	return (
		<Box sx={{ width: '1200px' }}>
			<Form onSubmit={value => setSearch(value)} isLoading={isLoading}></Form>
			<List lists={list}></List>
		</Box>
	);
}

export default Container;
