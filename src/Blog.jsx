import React, { useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction'; 
export default function Blog() {
  const homeRef = useRef(null);
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: 4,
        textAlign: 'center',
        backgroundColor: '#0b1020',
        boxShadow: 1,
       
        margin: '0 auto',
      }}
    >
      {/* Icon/Visual Placeholder */}
      <Box
        sx={{
          fontSize: 64,
          color: 'white',
          marginBottom: 2,
          animation: 'spin 4s linear infinite',
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      >
        <ConstructionIcon fontSize="inherit" />
      </Box>

      {/* Main Heading */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          color: 'white',
          marginBottom: 1.5,
          letterSpacing: '-0.5px',
        }}
      >
        Our Blog is Under Construction
      </Typography>

      {/* Supporting Text */}
      <Typography
        variant="body1"
        sx={{
          color: '#8b5cf6',
          maxWidth: 450,
          marginBottom: 3,
          lineHeight: 1.6,
        }}
      >
        We are actively working on this section to bring you high-quality articles, 
        tutorials, and updates. Stay tuned—we'll be live soon!
      </Typography>

      {/* Optional Call to Action */}
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          paddingX: 4,
          paddingY: 1,
          borderRadius: 2,
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
        }}
        onClick={ScrollToTop}
      >
        Go Back Home
      </Button>
    </Box>
  );
}