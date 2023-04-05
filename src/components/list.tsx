import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { ImageListItem } from '@mui/material';

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
	const theme = useTheme();

	const handleFirstPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

const columns = [
	{ id: 'thumbnail', label: 'Image', minWidth: 100, align: 'left' },
	{ id: 'title', label: 'Title', minWidth: 100, align: 'left' },
	{
		id: 'category',
		label: 'Category',
		minWidth: 100,
		align: 'left'
	},
	{
		id: 'author',
		label: 'Author(s)',
		minWidth: 200,
		align: 'left'
	},
	{
		id: 'desc',
		label: 'Description',
		minWidth: 300,
		align: 'left'
	}
];

const List = ({ lists }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - lists.length) : 0;

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = e => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};
	return (
		<div>
			{/* {lists.map((l, i) => (
				<li key={i}>{l}</li>
			))} */}

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 100 }} stickyHeader aria-label="sticky table">
					{lists.length ? (
						<TableHead>
							<TableRow>
								{columns.map(column => (
									<TableCell
										key={column.id}
										text-align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
					) : null}
					<TableBody>
						{(rowsPerPage > 0
							? lists.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: lists
						).map((list, i) => (
							<TableRow hover key={i}>
								<TableCell component="th" scope="row" style={{ width: '10%' }}>
									<ImageListItem
										sx={{ width: 80, height: 80, align: 'right' }}
										key={i}
									>
										<img
											src={`${list[0]}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${list[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={list[1]}
											loading="lazy"
										/>
									</ImageListItem>
								</TableCell>
								<TableCell style={{ width: '20%' }} align="left">
									{list[1]}
								</TableCell>
								<TableCell style={{ width: '10%' }} align="left">
									{list[2]}
								</TableCell>
								<TableCell style={{ width: '20%' }} align="left">
									{list[3]}
								</TableCell>
								<TableCell style={{ width: '40%' }} align="left">
									{list[4]}
								</TableCell>
							</TableRow>
						))}
						{emptyRows > 0 && (
							<TableRow hover style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					{lists.length ? (
						<TableFooter>
							<TableRow>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
									colSpan={5}
									count={lists.length}
									rowsPerPage={rowsPerPage}
									page={page}
									SelectProps={{
										inputProps: {
											'aria-label': 'rows per page'
										},
										native: true
									}}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
									ActionsComponent={TablePaginationActions}
								/>
							</TableRow>
						</TableFooter>
					) : null}
				</Table>
			</TableContainer>
		</div>
	);
};
export default List;
