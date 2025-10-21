import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdHotelClass } from "react-icons/md";




function ResponsiveAppBar() {


  return (
    <AppBar position="static" sx={{
      pl: 6,  
      bgcolor: 'black'
    }}>

      <Toolbar disableGutters sx={{
        boxShadow: 'inset 0 -px 2px rgba(255, 255, 255, 0.1)',
        padding: '1rem'
      }}>

        <MdHotelClass style={{ fontSize: '1.8rem', marginRight: '2rem' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/dashboard"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Hotel Parnaioca
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;