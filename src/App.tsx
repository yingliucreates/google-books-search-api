import React from 'react';
// import Container from './components/container';
import Container2 from './components/container2';
import { Box, Typography } from '@mui/material';

function App() {
	return (
		<Box
			data-testid="app-container"
			sx={{
				paddingTop: '50px',
				paddingBottom: '50px',
				paddingLeft: '80px',
				paddingRight: '80px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<Typography data-testid="typography-title" variant="h1">
				🔦 Google Books Search 📚
			</Typography>
			<Container2 />
		</Box>
	);
}

export default App;
