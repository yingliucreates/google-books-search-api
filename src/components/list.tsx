// import { useEffect, useState } from 'react';

const List = ({ lists }) => {
	return (
		<div>
			{lists.map((l, i) => (
				<li key={i}>{l}</li>
			))}
		</div>
	);
};
export default List;
