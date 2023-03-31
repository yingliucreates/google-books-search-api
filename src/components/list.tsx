import { useEffect, useState } from 'react';

const List = () => {
	const [list, setList] = useState(null);
	const searchPhrase = 'beautiful losers';

	useEffect(() => {
		fetch(
			`https://books.googleapis.com/books/v1/volumes?q=${searchPhrase}&maxResults=3&key=${process.env.REACT_APP_API_KEY}`,
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
				setList(
					data.items.map(item => [
						item.volumeInfo.title,
						item.volumeInfo.categories?.[0],
						item.volumeInfo.authors?.[0],
						item.volumeInfo.description,
						item.volumeInfo.imageLinks.smallThumbnail
					])
				);
			});
	}, []);

	return (
		<div>
			{list.map((l, i) => (
				<li key={i}>{l}</li>
			))}
		</div>
	);
};
export default List;
