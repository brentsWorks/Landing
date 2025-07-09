'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Box } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function TopBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(20, 20, 30, 0.85)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.12)',
        borderBottom: '1px solid #222',
      }}
    >
      <Toolbar sx={{ minHeight: 72, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <EmojiObjectsIcon sx={{ color: '#90caf9', fontSize: 36, mr: 1 }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              color: '#fff',
              fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif',
              borderLeft: '4px solid #90caf9',
              pl: 2,
              textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            Brent Brison
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            href="#projects"
            sx={{
              color: '#90caf9',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: 18,
              px: 3,
              borderRadius: 2,
              transition: 'all 0.2s',
              '&:hover': {
                color: '#fff',
                background: 'linear-gradient(90deg, #90caf9 0%, #1976d2 100%)',
                transform: 'scale(1.08) translateY(-2px)',
                boxShadow: '0 4px 24px 0 rgba(144,202,249,0.18)',
              },
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            href="#experience"
            sx={{
              color: '#90caf9',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: 18,
              px: 3,
              borderRadius: 2,
              transition: 'all 0.2s',
              '&:hover': {
                color: '#fff',
                background: 'linear-gradient(90deg, #1976d2 0%, #90caf9 100%)',
                transform: 'scale(1.08) translateY(-2px)',
                boxShadow: '0 4px 24px 0 rgba(144,202,249,0.18)',
              },
            }}
          >
            Experience
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}