'use client';

import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const experiences = [
  {
    employer: 'Headstarter AI',
    role: 'Software Engineering Fellow',
    dates: 'June 2025 - Present',
    location: 'Remote, USA',
    image: '/images/Headstarter.jpeg',
  },
  {
    employer: 'Mobalytics',
    role: 'Data Analysis & Research Intern',
    dates: 'September 2023 - December 2023',
    location: 'Marina Del Rey, CA',
    image: '/images/mobalytics.jpeg',
  },
  {
    employer: 'Interweave Capital',
    role: 'Cybersecurity Market Analyst',
    dates: 'June 2023 - September 2023',
    location: 'Palo Alto, CA',
    image: '/images/iwcapital.jpeg',
  },
];

export default function ExperienceSection() {
  return (
    <Box sx={{ py: 8, background: 'black' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: '#90caf9', fontWeight: 700, mb: 6 }}
      >
        Work <span style={{ color: '#fff' }}>Experience</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp, idx) => (
          <Grid key={idx} component="div">
            <Card
              sx={{
                background: '#181818',
                color: '#f5f5f5',
                borderRadius: 3,
                boxShadow: 3,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                minWidth: 320,
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              <CardMedia
                component="img"
                image={exp.image}
                alt={exp.employer}
                sx={{ width: 100, height: 100, objectFit: 'cover', m: 2, borderRadius: 2 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#90caf9', fontWeight: 600 }}>
                  {exp.employer}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#bdbdbd' }}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
                  {exp.dates}
                </Typography>
                <Typography variant="body2">{exp.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 