'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function TopBar() {
	return (
		<AppBar position="static" sx={{
			backgroundColor: 'black',
			boxShadow: 'none',
			padding: 0,
			margin: 0,
			width: '100vw',
			left: 0,
			right: 0,
			}}>
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					<Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
						Home
					</Link>
				</Typography>
				<Button color="inherit" component={Link} href="#projects">Projects</Button>
				<Button color="inherit" component={Link} href="#experience">Experience</Button>
			</Toolbar>
		</AppBar>
	)
}