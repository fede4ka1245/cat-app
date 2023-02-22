import React from 'react';
import Header from "./componets/header/Header.js";
import CatImage from './componets/catImage/CatImage.js';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container width={'100%'} display='flex' justifyContent={'center'} alignItems='center' flexDirection='column'>
        <Grid item width={'100vw'} maxWidth='600px'>
          <CatImage />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
