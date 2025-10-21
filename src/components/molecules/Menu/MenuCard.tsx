'use client'

import * as React from 'react';
import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';


interface MenuCardProps {
  title: string;
  icon: React.ReactElement<SvgIconComponent>;
  onClick?: () => void;
  sx?: any;
  

}

export default function MenuCard({ title, icon, onClick, sx,  }: MenuCardProps) {
  return (
    <Card
      sx={{
        ...sx,
        width: '100%',
        height: 90,
        bgcolor: 'black',
        color:'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 2,
        borderRadius: 4,
        transition: '0.3s',
        '&:hover': { boxShadow: 5, transform: 'scale(1.03)' },
        pl: 2,
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
        }}
      >
        <Box>{icon}</Box>
        <CardContent sx={{ flex: 'none', p: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 100 }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
