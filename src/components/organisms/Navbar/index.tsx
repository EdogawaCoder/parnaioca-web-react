import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdHotelClass } from "react-icons/md";




function ResponsiveAppBar() {


  return (
    <AppBar position="static" sx={{ bgcolor: 'black', boxShadow: 'inset 0 -2px 2px rgba(255, 255, 255, 0.1)' }}>
     
        <Toolbar disableGutters sx={{  pl: 9,
    boxShadow: 'inset 0 -1px 2px rgba(255, 255, 255, 0.1)' }}>

          <MdHotelClass style={{ fontSize: '1.8rem', marginRight: '2rem' }}/>
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