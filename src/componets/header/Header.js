import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ background: "#292929" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          The Cats App!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;