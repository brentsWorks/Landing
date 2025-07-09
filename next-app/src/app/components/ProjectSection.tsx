'use client';

import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'GPA Prediction with Machine Learning',
    date: 'February 2023',
    image: '/images/GPAPredict.png',
    description:
      "Successfully developed a linear regression based machine learning program in Python to build and train a model that would predict a student's future GPA based on a given dataset.",
  },
  {
    title: 'Environmental Statistical Analysis and Data Collection',
    date: 'April 2023',
    image: '/images/RPI.jpg',
    description:
      'Developed an environmental data collection system using a DHT11 sensor and a Raspberry Pi 400B, integrating MariaDB for database management and writing a C-based program for intuitive, real-time statistical analysis of temperature and humidity.',
  },
  {
    title: 'Tidal Disruption Analysis',
    date: 'March 2024',
    image: '/images/TidalDataProj.png',
    description:
      "Collaborated with a team of 4 to develop a Python script for simulating and analyzing Santa Cruz tidal data, identifying discrepancies caused by the Hunga Tonga-Hunga Ha'apai volcanic eruption, and finalized a Jupyter Notebook to visualize findings, revealing a significant 2 ft deviation from regular tidal patterns due to tsunami impacts.",
  },
  {
    title: 'Virtualized Campus Parking System',
    date: 'April 2025',
    image: '/images/parkwiselogo.png',
    description:
      'Collaborated in a team of 6 developers to build a digital solution for campus parking operations, replacing paper-based systems with streamlined online processes for vehicle registration, permit purchasing, and ticket management.',
  },
];

export default function ProjectSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards visible at once
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box sx={{ py: 8, background: 'black', px: { xs: 1, sm: 4, md: 10, lg: 20 } }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: '#90caf9', fontWeight: 700, mb: 6 }}
      >
        My <span style={{ color: '#fff' }}>Projects</span>
      </Typography>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <Box key={idx} sx={{ px: 2 }}>
            <Card
              sx={{
                background: '#23272f',
                color: '#f5f5f5',
                borderRadius: 3,
                boxShadow: 2,
                height: '100%',
                minHeight: 340,
                maxHeight: 340,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #334155',
                px: 2,
                py: 2,
                transition: 'transform 0.2s, box-shadow 0.2s, max-height 0.2s, border-radius 0.2s',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.04)',
                  boxShadow: 6,
                  zIndex: 2,
                  maxHeight: 'none',
                  borderRadius: 3 * 1.04,
                },
                '&:hover .MuiCardContent-root': {
                  maxHeight: 'none',
                  borderRadius: 3 * 1.04,
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'contain', background: '#1e293b', borderRadius: 2, mb: 2, transition: 'border-radius 0.2s' }}
              />
              <CardContent sx={{
                flexGrow: 1,
                p: 0,
                minHeight: 120,
                maxHeight: 120,
                overflow: 'hidden',
                transition: 'max-height 0.2s, border-radius 0.2s',
                borderRadius: 3,
              }}>
                <Typography variant="h6" sx={{ color: '#90caf9', fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#bdbdbd', mb: 1 }}>
                  {project.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'all 0.2s',
                    '&:hover': {
                      WebkitLineClamp: 'unset',
                      overflow: 'visible',
                      background: 'rgba(30,41,59,0.95)',
                      borderRadius: 2,
                      p: 1,
                    },
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
