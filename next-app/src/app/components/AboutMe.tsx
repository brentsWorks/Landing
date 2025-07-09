'use client';

import { Box, Typography, Button, Stack, Avatar, IconButton, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import { Typewriter } from 'react-simple-typewriter';

export default function MeSection() {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        py: 8,
        background: 'black',
        color: 'white',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          background: 'rgba(30, 41, 59, 0.7)',
          backdropFilter: 'blur(8px)',
          borderRadius: 5,
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 6 },
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
          border: '1px solid #334155',
        }}
      >
        <Avatar
          src="/images/profilepic.jpeg"
          alt="Profile Picture"
          sx={{ width: 200, height: 200, boxShadow: 4, border: '3px solid #90caf9' }}
        />
        <Box>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#f5f5f5', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            Hi, I'm <span style={{ color: '#90caf9', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Brent</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, color: '#e3f2fd', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            I'm a <span style={{ color: '#90caf9', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              <Typewriter
                words={['Software Engineer', 'Competitive Athlete']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, color: '#e0e0e0' }}>
            Living a well-balanced life while fulfilling my unwavering passion for the future of technology.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/brent-brison/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              sx={{ color: '#90caf9', background: 'rgba(255,255,255,0.06)', '&:hover': { background: '#90caf9', color: '#1e293b' } }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/brentsWorks/"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              sx={{ color: '#90caf9', background: 'rgba(255,255,255,0.06)', '&:hover': { background: '#90caf9', color: '#1e293b' } }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/brentbrison/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              sx={{ color: '#90caf9', background: 'rgba(255,255,255,0.06)', '&:hover': { background: '#90caf9', color: '#1e293b' } }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Tooltip title="Download CV" placement="top">
              <IconButton
                component="a"
                href="/Brent_Brison_Resume.pdf"
                download
                sx={{
                  color: '#90caf9',
                  background: 'rgba(255,255,255,0.06)',
                  border: '2px solid #90caf9',
                  width: 56,
                  height: 56,
                  '&:hover': { background: '#90caf9', color: '#1e293b' }
                }}
                aria-label="Download CV"
              >
                <DownloadIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Button
              variant="outlined"
              color="primary"
              href="mailto:bbrison@ucsc.edu?subject=Contact&body=Hello%20Brent,%0D%0A%0D%0A"
              sx={{ fontWeight: 600, px: 4, py: 1.5, borderRadius: 3, borderColor: '#90caf9', color: '#90caf9', background: 'rgba(144,202,249,0.08)', '&:hover': { background: '#90caf9', color: '#1e293b' } }}
            >
              Contact me
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
